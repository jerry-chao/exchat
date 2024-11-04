defmodule Message.Repo.Migrations.AddMessagesTable do
  use Ecto.Migration

  def change do
    create table(:message) do
      add(:from, :string)
      add(:to, :string)
      add(:txt, :string)
    end
  end
end
