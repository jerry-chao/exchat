defmodule Exchat.Repo.Migrations.AddReadAtToMessages do
  use Ecto.Migration

  def change do
    alter table(:messages) do
      add(:read_at, :naive_datetime, null: true)
    end
  end
end
