defmodule Connection.SocketHandler do
  @behaviour :cowboy_websocket

  @impl true
  def init(request, _state) do
    state = %{registry_key: request.path, status: :waiting_provision}
    {:cowboy_websocket, request, state}
  end

  @impl true
  def websocket_init(state) do
    Registry.Connection
    |> Registry.register(state.registry_key, [])

    {:ok, state}
  end

  @impl true
  def websocket_handle({:binary, chat}, state) do
    chat = Protos.Chat.decode(chat)
    IO.puts("chat: #{inspect(chat)}")
    Connection.Client.handle(chat, state)
    message = "hello, recved"

    # Registry.Connection
    # |> Registry.dispatch(state.registry_key, fn entries ->
    #   for {pid, _} <- entries do
    #     if pid != self() do
    #       send(pid, message)
    #     end
    #   end
    # end)

    {:reply, {:text, message}, state}
  end

  @impl true
  def websocket_info(info, state) do
    {:reply, {:text, info}, state}
  end
end
