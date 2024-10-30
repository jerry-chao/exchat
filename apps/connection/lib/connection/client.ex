defmodule Connection.Client do
  @doc """
  Handle the client connection, receive data from client and send data to client.
  """

  def handle(chat, state) do
    %{}
    |> handle_connect(state, chat.connect)
  end

  def handle_connect(%{error: nil}, %{status: :waiting_provision} = state, connect) do
    IO.puts("connect: #{inspect(connect)}")
    uid = connect.uid
    password = connect.password

    case auth(uid, password) do
      true ->
        IO.puts("auth success")
        {:ok, %{state | status: :connected}}

      false ->
        IO.puts("auth failed")
        {:error, %{state | status: :auth_failed}}
    end
  end

  def handle_connect(%{error: _error}, state, _connect) do
    {:error, state}
  end

  def auth("zhangchao", "123456") do
    true
  end

  def auth(_, _) do
    false
  end
end
