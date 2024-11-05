defmodule Message do
  @moduledoc """
  this is the module which handle request and response message from client.
  """
  require Logger

  @doc """
  handle message from client and send response to client.
  """
  def handle(uid, message) do
    message = Protos.Message.decode(message)

    response =
      %Protos.Response{status: :OK}
      |> handle_message(message)
      |> handle_text(uid, message.text)
      |> store_message(message)

    Logger.info("response: #{inspect(response)}")
    Protos.Message.encode(%Protos.Message{response: response})
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

  def handle_message(response, %Protos.Message{from: nil}) do
    %Protos.Response{response | status: :ERROR, code: :CODE_INVALID_FROM}
  end

  def handle_message(response, %Protos.Message{to: nil}) do
    %Protos.Response{response | status: :ERROR, code: :CODE_INVALID_TO}
  end

  def handle_message(response, %Protos.Message{text: nil}) do
    %Protos.Response{response | status: :ERROR, code: :CODE_INVALID_EMPTY_MSG}
  end

  def handle_message(response, _message) do
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
end
