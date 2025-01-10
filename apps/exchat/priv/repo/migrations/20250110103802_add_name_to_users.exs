defmodule Exchat.Repo.Migrations.AddNameToUsers do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add(:name, :string, size: 100)
    end
  end
end
