defmodule ConnectionTest do
  use ExUnit.Case
  doctest Connection
  alias Connection.Protos.Disconnect
  alias Connection.Protos.Connect
  alias Connection.Protos.ConnAck
  alias Connection.Protos.DisconnectAck

  test "connect encode" do
    connect = %Connection.Protos.Connect{uid: "123", password: "456"}
    encoded = Connect.encode(connect)
    assert <<10, 3, 49, 50, 51, 18, 3, 52, 53, 54>> == encoded
    assert Connect.decode(encoded) == connect
  end

  test "connack encode" do
    connack = %Connection.Protos.ConnAck{success: true, message: "ok"}
    encoded = ConnAck.encode(connack)
    assert <<8, 1, 18, 2, 111, 107>> == encoded
    assert ConnAck.decode(encoded) == connack
  end

  test "disconnect encode" do
    disconnect = %Connection.Protos.Disconnect{reason: "killed"}
    encoded = Disconnect.encode(disconnect)
    assert <<10, 6, 107, 105, 108, 108, 101, 100>> == encoded
    assert Disconnect.decode(encoded) == disconnect
  end

  test "disconnect ack encode" do
    disconnect_ack = %Connection.Protos.DisconnectAck{success: true, message: "ok"}
    encoded = DisconnectAck.encode(disconnect_ack)
    assert <<8, 1, 18, 2, 111, 107>> == encoded
    assert DisconnectAck.decode(encoded) == disconnect_ack
  end
end
