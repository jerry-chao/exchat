defmodule Exchat.Chat.Conversation do
  use Ecto.Schema
  import Ecto.Changeset

  schema "conversations" do
    field(:name, :string)
    field(:type, :string)
    field(:cid, :integer)
    field(:user_id, :id)
    field(:last_message, :map, virtual: true)
    field(:unread_count, :integer, virtual: true)
    timestamps()
  end

  @doc false
  def changeset(conversation, attrs) do
    conversation
    |> cast(attrs, [:type, :cid, :name, :user_id])
    |> validate_required([:type, :cid, :name, :user_id])
  end
end
