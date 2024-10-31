defmodule Connection.Client do
  @doc """
  Handle the client connection, receive data from client and send data to client.
  """

  def handle(chat, state) do
    %{error: nil, state: state} |> handle_connect(chat.connect)
  end

  def handle_connect(%{error: nil, state: %{status: :waiting_provision} = state}, connect) do
    IO.puts("connect: #{inspect(connect)}")
    uid = connect.uid
    password = connect.password

    case auth(uid, password) do
      true ->
        IO.puts("auth success")

        response =
          %Protos.Chat{
            conn_ack: %Protos.ConnAck{success: true, message: "you are logined"}
          }

        %{error: :ok, response: response, state: %{state | status: :connected}}

      false ->
        IO.puts("auth failed")

        response =
          %Protos.Chat{
            conn_ack: %Protos.ConnAck{success: false, message: "auth failed"}
          }

        %{error: :error, response: response, state: %{state | status: :auth_failed}}
    end
  end

  def handle_connect(%{error: error, state: state}, _connect) do
    %{error: error, state: state}
  end

  def auth("zhangchao", "123456") do
    true
  end

  def auth(_, _) do
    false
  end
end
