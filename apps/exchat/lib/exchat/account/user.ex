defmodule Exchat.Account.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field(:password, :string)
    field(:uid, :string)

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:uid, :password])
    |> validate_required([:uid, :password])
    |> unique_constraint(:uid)
  end
end
