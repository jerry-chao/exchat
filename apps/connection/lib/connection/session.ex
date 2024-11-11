defmodule Connection.Session do
  @moduledoc """
  This is module define user session to handle client connection.
  """

  def register(user, pid) do
    Registry.Connection |> Registry.register(user, pid)
  end

  def unregister(user) do
    Registry.Connection |> Registry.unregister(user)
  end

  def get_user_pid(user) do
    Registry.Connection |> Registry.lookup(user)
  end
end
