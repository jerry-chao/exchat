defmodule Connection.SocketHandler do
  @behaviour :cowboy_websocket

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
    IO.puts("chat: #{inspect(chat)}")

    case Connection.Client.handle(chat, state) do
      %{result: :ok, response: response, state: state} ->
        IO.puts("handle success #{inspect(response)}")
        {:reply, {:binary, Protos.Chat.encode(response)}, state}

      %{result: :error, response: response, state: state} ->
        IO.puts("handle error")
        {:reply, {:binary, Protos.Chat.encode(response)}, state}
    end
  end

  def websocket_handle({:ping, "PING"}, state) do
    IO.puts("websocket_handle received ping")
    {:reply, {:pong, "PONG"}, state}
  end

  def websocket_handle(arg0, state) do
    IO.puts("websocket_handle received unknown messages: #{inspect(arg0)}")
    {:ok, state}
  end

  @impl true
  def websocket_info(info, state) do
    IO.puts("websocket_info: send data to client #{inspect(info)}")
    {:reply, {:binary, info}, state}
  end
end
