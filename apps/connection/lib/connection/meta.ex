defmodule Connection.Meta do
  require Logger

  def handle(uid, payload) do
    %{result: :ok, response: nil} |> handle_sync(uid, Protos.Sync.decode(payload))
  end

  def handle_sync(%{result: :ok}, uid, %Protos.Sync{
        metas: metas,
        type: :SYNC
      }) do
    Logger.info("receive sync: #{inspect(metas)}")

    Enum.map(metas, fn meta ->
      handle_meta(%{result: :ok}, uid, meta)
    end)

    Protos.Sync.encode(%Protos.Sync{
      response: %Protos.SyncResponse{status: :OK, code: :CODE_OK, reason: "ok"}
    })
  end

  def handle_meta(%{result: :ok}, uid, %Protos.Meta{
        payload: payload,
        type: :TYPE_MESSAGE
      }) do
    Logger.info("sync received: #{inspect(payload)}")
    Message.handle(uid, payload)
  end
end
