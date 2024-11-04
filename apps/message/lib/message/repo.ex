defmodule Message.Repo do
  use Ecto.Repo,
    otp_app: :message,
    adapter: Ecto.Adapters.Postgres
end
