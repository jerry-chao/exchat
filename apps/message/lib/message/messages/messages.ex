defmodule Message.Messages do
  use Ecto.Schema
  import Ecto.Changeset

  schema "message" do
    field(:from, :integer)
    field(:to, :integer)
    field(:txt, :string)

    timestamps()
  end

  def changeset(message, params \\ %{}) do
    message
    |> cast(params, [:from, :to, :txt])
    |> validate_required([:from, :to, :txt])
    |> foreign_key_constraint(:from)
    |> foreign_key_constraint(:to)
  end
end
