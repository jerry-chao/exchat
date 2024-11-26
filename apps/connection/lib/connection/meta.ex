defmodule Connection.Meta do
  require Logger

  def handle(uid, payload) do
    %{result: :ok, response: nil} |> handle_meta(uid, Protos.Meta.decode(payload))
  end

  def handle_meta(%{result: :ok}, uid, %Protos.Meta{
        payload: payload,
        type: :TYPE_MESSAGE
      }) do
    Logger.info("sync received: #{inspect(payload)}")
    Message.handle(uid, payload)
  end
end
