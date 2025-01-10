defmodule Message.Repo.Migrations.AddMessagesTable do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add(:from, :integer)
      add(:to, :integer)
      add(:txt, :string)

      timestamps()
    end

    create(index(:messages, [:from]))
    create(index(:messages, [:to]))
  end
end
