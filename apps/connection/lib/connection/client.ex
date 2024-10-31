defmodule Connection.Client do
  @doc """
  Handle the client connection, receive data from client and send data to client.
  """

  def handle(chat, state) do
    %{result: :ok, response: nil, state: state}
    |> handle_connect(chat.connect)
    |> handle_disconnect(chat.disconnect)
    |> handle_sync(chat.sync)
    |> handle_ping(chat.ping)
  end

  def handle_ping(%{result: :ok} = request, %Protos.Ping{}) do
    response =
      %Protos.Chat{
        pong: %Protos.Pong{}
      }

    %{request | response: response}
  end

  def handle_ping(request, nil) do
    request
  end

  def handle_sync(request, nil) do
    request
  end

  def handle_sync(%{result: :ok} = request, %Protos.Sync{payload: payload}) do
    IO.puts("sync received: #{inspect(payload)}")

    response =
      %Protos.Chat{
        sync_ack: %Protos.SyncAck{success: true, message: "send messsage success"}
      }

    %{request | response: response}
  end

  def handle_sync(request, _sync) do
    request
  end

  def handle_disconnect(
        %{result: :ok, state: %{status: :connected} = state} = request,
        %Protos.Disconnect{reason: reason}
      ) do
    IO.puts("disconnect handle disconnect #{inspect(reason)}")

    response =
      %Protos.Chat{
        conn_ack: %Protos.ConnAck{success: true, message: "you are logined"}
      }

    %{request | response: response, state: %{state | status: :connected}}
  end

  def handle_disconnect(request, nil) do
    request
  end

  def handle_disconnect(%{result: error, state: state} = request, _disconnect) do
    IO.puts("disconnect failed #{inspect(error)}")

    response =
      %Protos.Chat{
        conn_ack: %Protos.DisconnectAck{success: false, message: "disconnected failed"}
      }

    %{request | response: response, state: %{state | status: :connected}}
  end

  def handle_connect(
        %{result: :ok, state: %{status: :waiting_provision} = state} = request,
        connect
      ) do
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

        %{request | response: response, state: %{state | status: :connected}}

      false ->
        IO.puts("auth failed")

        response =
          %Protos.Chat{
            conn_ack: %Protos.ConnAck{success: false, message: "auth failed"}
          }

        %{request | result: :error, response: response, state: %{state | status: :auth_failed}}
    end
  end

  def handle_connect(request, nil) do
    request
  end

  def handle_connect(%{state: state} = request, _disconnect) do
    response =
      %Protos.Chat{
        conn_ack: %Protos.ConnAck{success: false, message: "already connected"}
      }

    %{request | response: response, state: state}
  end

  def auth("zhangchao", "123456") do
    true
  end

  def auth(_, _) do
    false
  end
end
