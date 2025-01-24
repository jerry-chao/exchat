defmodule MessageTest do
  use ExUnit.Case
  doctest Message

  test "body encode" do
    text = %Protos.TextMessage{text: "hello"}

    message = %Protos.Message{text: text, from: "tom", to: "marry"}
    encoded = Protos.Message.encode(message)

    assert <<10, 3, 116, 111, 109, 18, 5, 109, 97, 114, 114, 121, 26, 7, 10, 5, 104, 101, 108,
             108, 111>> = encoded

    assert message == Protos.Message.decode(encoded)
  end

  test "response encode" do
    response = %Protos.Response{status: :OK}
    encoded = Protos.Response.encode(response)

    assert <<>> = encoded
    decoded_response = Protos.Response.decode(encoded)
    assert decoded_response.status == :OK
  end

  # test "handle send text message" do
  #   text = %Protos.TextMessage{text: "hello"}

  #   message = %Protos.Message{text: text, from: "tom", to: "marry"}
  #   encoded = Protos.Message.encode(message)
  #   response = Message.handle("tom", encoded)
  #   expect_response = %Protos.Response{status: :OK, code: :CODE_OK}
  #   message_reply = %Protos.Message{response: expect_response} |> Protos.Message.encode()
  #   assert response == message_reply
  # end
end
