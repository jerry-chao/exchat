defmodule Message do
  @moduledoc """
  this is the module which handle request and response message from client.
  """
  require Logger

  @doc """
  handle message from client and send response to client.

  ## Examples
  """
  def handle(uid, message) do
    message = Protos.Message.decode(message)

    response =
      %Protos.Response{status: :OK}
      |> handle_message(uid, message)
      |> handle_text(uid, message.text)
      |> store_message(message)
      |> send_message(message)

    Logger.info("response: #{inspect(response)}")
    Protos.Message.encode(%Protos.Message{response: response})
  end

  def send_message(%Protos.Response{status: status} = response, _message) when status != :OK do
    response
  end

  def send_message(response, nil) do
    response
  end

  def send_message(response, message) do
    Logger.info("send message to user : #{inspect(message.to)}, #{inspect(message)}")
    # sync = Protos.Message.encode(message)
    # Exchat.Session.send_message(message.to, sync)
    response
  end

  def store_message(response, nil) do
    response
  end

  def store_message(%Protos.Response{status: status} = response, _message) when status != :OK do
    response
  end

  def store_message(response, message) do
    message = %Message.Messages{from: message.from, to: message.to, txt: message.text.text}
    Message.Repo.insert(message)
    response
  end

  def handle_message(response, uid, %Protos.Message{from: from}) when uid != from do
    %Protos.Response{response | status: :ERROR, code: :CODE_INVALID_FROM}
  end

  def handle_message(response, _uid, %Protos.Message{to: nil}) do
    %Protos.Response{response | status: :ERROR, code: :CODE_INVALID_TO}
  end

  def handle_message(response, _uid, %Protos.Message{text: nil}) do
    %Protos.Response{response | status: :ERROR, code: :CODE_INVALID_EMPTY_MSG}
  end

  def handle_message(response, _uid, _message) do
    response
  end

  def handle_text(response, _uid, nil) do
    response
  end

  def handle_text(%Protos.Response{status: status} = response, _uid, _) when status != :OK do
    response
  end

  def handle_text(response, uid, %Protos.TextMessage{text: txt}) do
    Logger.info("handle uid #{uid} send text message: #{inspect(txt)}")
    response
  end

  @doc """
  Gets messages for a conversation by cid.
  Returns messages where from or to matches the cid.

  ## Examples

      iex> Message.get_messages(5, 6)
      []
  """
  def get_messages(user_id, cid) when is_integer(cid) and is_integer(user_id) do
    import Ecto.Query

    Message.Messages
    |> where([m], (m.from == ^cid and m.to == ^user_id) or (m.from == ^user_id and m.to == ^cid))
    |> order_by([m], asc: m.inserted_at)
    |> Message.Repo.all()
    |> Enum.map(fn message ->
      %{
        message
        | is_self: message.from == user_id
      }
    end)
  end

  def get_messages(_, _), do: []

  @doc """
  Creates a message.
  """
  def create_message(attrs \\ %{}) do
    %Message.Messages{}
    |> Message.Messages.changeset(attrs)
    |> Message.Repo.insert()
  end
end
