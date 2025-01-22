defmodule Message.Messages do
  use Ecto.Schema
  import Ecto.Changeset

  schema "messages" do
    field(:from, :integer)
    field(:to, :integer)
    field(:txt, :string)
    field(:read_at, :naive_datetime)
    field(:is_self, :boolean, virtual: true)

    timestamps()
  end

  def changeset(message, params \\ %{}) do
    message
    |> cast(params, [:from, :to, :txt, :read_at])
    |> validate_required([:from, :to, :txt])
    |> foreign_key_constraint(:from)
    |> foreign_key_constraint(:to)
  end
end
