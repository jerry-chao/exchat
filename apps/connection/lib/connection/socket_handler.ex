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
  def websocket_info({:message, sync}, state) do
    Logger.info("websocket_info: send data to client #{inspect(sync)}")
    sync = %Protos.Sync{payload: sync, type: :SYNC_TYPE_MESSAGE}
    {:reply, {:binary, Protos.Chat.encode(%Protos.Chat{sync: sync})}, state}
  end
end
