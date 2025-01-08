defmodule Exchat.Chat.Conversation do
  use Ecto.Schema
  import Ecto.Changeset

  schema "conversations" do
    field(:name, :string)
    field(:type, :string)
    field(:cid, :string)
    field(:user_id, :id)

    timestamps()
  end

  @doc false
  def changeset(conversation, attrs) do
    conversation
    |> cast(attrs, [:type, :cid, :name])
    |> validate_required([:type, :cid, :name])
  end
end
