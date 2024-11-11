defmodule Exchat.AccountFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Exchat.Account` context.
  """

  @doc """
  Generate a unique user uid.
  """
  def unique_user_uid, do: "some uid#{System.unique_integer([:positive])}"

  @doc """
  Generate a user.
  """
  def user_fixture(attrs \\ %{}) do
    {:ok, user} =
      attrs
      |> Enum.into(%{
        password: "some password",
        uid: unique_user_uid()
      })
      |> Exchat.Account.create_user()

    user
  end
end
