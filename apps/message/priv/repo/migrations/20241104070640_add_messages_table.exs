defmodule Message.Repo.Migrations.AddMessagesTable do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add(:from, references(:users, on_delete: :delete_all), null: false)
      add(:to, references(:users, on_delete: :delete_all), null: false)
      add(:txt, :string)

      timestamps()
    end

    create(index(:messages, [:from]))
    create(index(:messages, [:to]))
  end
end
