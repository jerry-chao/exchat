defmodule Connection.SocketHandler do
  @behaviour :cowboy_websocket
  require Logger

  @impl true
  def init(request, _state) do
    state = %{room: request.path, status: :waiting_provision}
    {:cowboy_websocket, request, state}
  end

  @impl true
  def websocket_init(state) do
    {:ok, state}
  end

  @impl true
  def websocket_handle({:binary, chat}, state) do
    chat = Protos.Chat.decode(chat)
    Logger.info("chat: #{inspect(chat)}")

    case Connection.Client.handle(chat, state) do
      %{result: :ok, response: response, state: state} ->
        Logger.info("handle success #{inspect(response)}")
        {:reply, {:binary, Protos.Chat.encode(response)}, state}

      %{result: :error, response: response, state: state} ->
        Logger.info("handle error")
        {:reply, {:binary, Protos.Chat.encode(response)}, state}
    end
  end

  def websocket_handle({:ping, "PING"}, state) do
    Logger.info("websocket_handle received ping")
    {:reply, {:pong, "PONG"}, state}
  end

  def websocket_handle(arg0, state) do
    Logger.info("websocket_handle received unknown messages: #{inspect(arg0)}")
    {:ok, state}
  end

  @impl true
  def websocket_info({:close, reason}, state) do
    Logger.info("websocket_info: close connection user #{state.uid}, reason: #{reason}")
    {[{:shutdown_reason, reason}], state}
  end

  def websocket_info({:message, message}, state) do
    Logger.info("websocket_info: send data to client #{inspect(message)}")
    meta_id = :os.system_time(:millisecond) * 1000 + (:rand.uniform(1000) - 1)

    meta = %Protos.Meta{
      id: meta_id,
      type: :TYPE_MESSAGE,
      payload: message,
      is_store: true,
      is_sync_from: false
    }

    seq_id = :os.system_time(:millisecond) * 1000 + (:rand.uniform(1000) - 1)
    sync = %Protos.Sync{seq: seq_id, type: :SYNC, is_last: true, metas: [meta]}
    send = %Protos.Send{payload: Protos.Sync.encode(sync)}
    {:reply, {:binary, Protos.Chat.encode(%Protos.Chat{send: send})}, state}
  end
end
