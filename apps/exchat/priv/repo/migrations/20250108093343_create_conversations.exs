defmodule Exchat.Repo.Migrations.CreateConversations do
  use Ecto.Migration

  def change do
    create table(:conversations) do
      add(:type, :string)
      add(:cid, :string)
      add(:name, :string)
      add(:user_id, references(:users, on_delete: :nothing))

      timestamps()
    end

    # Index for faster lookups
    create(index(:conversations, [:user_id]))
    # Composite index for finding specific conversations
    create(index(:conversations, [:user_id, :type, :cid]))
    # Ensure user can't have duplicate conversations with same target
    create(
      unique_index(:conversations, [:user_id, :cid],
        where: "type = 'single'",
        name: :unique_single_conversation
      )
    )
  end
end
