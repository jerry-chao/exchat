defmodule Exchat.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add(:uid, :string)
      add(:password, :string)

      timestamps()
    end

    create(unique_index(:users, [:uid]))
  end
end
