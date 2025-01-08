defmodule Message.Repo.Migrations.AddMessagesTable do
  use Ecto.Migration

  def change do
    create table(:message) do
      add(:from, references(:users, on_delete: :delete_all), null: false)
      add(:to, references(:users, on_delete: :delete_all), null: false)
      add(:txt, :string)

      timestamps()
    end

    create(index(:message, [:from]))
    create(index(:message, [:to]))
  end
end
