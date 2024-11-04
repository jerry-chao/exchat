defmodule Message.Messages do
  use Ecto.Schema

  schema "message" do
    field(:from, :string)
    field(:to, :string)
    field(:txt, :string)
  end

  def changeset(message, params \\ %{}) do
    message
    |> Ecto.Changeset.cast(params, [:from, :to, :txt])
    |> Ecto.Changeset.validate_required([:from, :to, :txt])
  end
end
