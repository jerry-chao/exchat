defmodule Connection.Transform do
  @behaviour Protobuf.TransformModule

  @impl true
  def encode(connect, _type) do
    connect
  end

  @impl true
  def decode(connect, _type) do
    connect
  end
end
