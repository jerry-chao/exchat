defmodule Connection.Client do
  require Logger

  @doc """
  Handle the client connection, receive data from client and send data to client.
  """

  def handle(chat, state) do
    %{result: :ok, response: nil, state: state}
    |> handle_connect(chat.connect)
    |> handle_disconnect(chat.disconnect)
    |> handle_sync(chat.send)
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

  def handle_sync(%{result: :ok, state: state} = request, %Protos.Send{
        payload: payload
      }) do
    Logger.info("sync received: #{inspect(payload)}")
    message_response = Connection.Meta.handle(state.uid, payload)

    Logger.info("message response: #{inspect(message_response)}")

    response =
      %Protos.Chat{
        send_ack: %Protos.SendAck{success: true, detail: message_response}
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
    Logger.info("disconnect handle disconnect #{inspect(reason)}")

    response =
      %Protos.Chat{
        conn_ack: %Protos.ConnAck{success: true, message: "you are logined"}
      }

    Exchat.Session.unregister(state.uid)

    %{request | response: response, state: %{state | status: :connected}}
  end

  def handle_disconnect(request, nil) do
    request
  end

  def handle_disconnect(%{result: error, state: state} = request, _disconnect) do
    Logger.info("disconnect failed #{inspect(error)}")

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
    Logger.info("connect: #{inspect(connect)}")
    uid = connect.uid
    password = connect.password

    case auth(uid, password) do
      true ->
        Logger.info("auth success uid #{uid}, room: #{state.room}")

        response =
          %Protos.Chat{
            conn_ack: %Protos.ConnAck{success: true, message: "you are logined"}
          }

        Exchat.Session.register(uid, [])

        %{
          request
          | response: response,
            state: %{state | status: :connected} |> Map.put(:uid, uid)
        }

      false ->
        Logger.info("auth failed")

        response =
          %Protos.Chat{
            conn_ack: %Protos.ConnAck{success: false, message: "auth failed"}
          }

        # close the connection
        Process.send(self(), {:close, :auth_failed}, [])

        %{
          request
          | result: :error,
            response: response,
            state: %{state | status: :auth_failed} |> Map.put(:uid, uid)
        }
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

  def auth(uid, password) do
    case Exchat.Account.get_user_by_uid!(uid) do
      nil -> false
      user -> user.password == password
    end
  end

  def send_message(to, sync) do
    Registry.Connection
    |> Registry.dispatch(to, fn entries ->
      Logger.info("dispatch to all clients for specific user, entries: #{inspect(entries)}")

      for {pid, _} <- entries do
        if pid != self() do
          send(pid, Protos.Chat.encode(%Protos.Chat{send: sync}))
        end
      end
    end)
  end
end
