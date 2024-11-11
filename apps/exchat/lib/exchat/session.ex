defmodule Exchat.Session do
  @moduledoc """
  This is module define user session to handle client connection.
  """
  require Logger

  @doc """
  Register the current user connection to the registry with the username for private message.

  """
  def register(user, info) do
    Registry.Connection |> Registry.register(user, info)
  end

  @doc """
  User disconncet or User leave the room, unregister the user from the registry.
  """
  def unregister(user) do
    Registry.Connection |> Registry.unregister(user)
  end

  @doc """
  Get the user pid from the registry.
  """
  def get_user_pid(user) do
    Registry.Connection |> Registry.lookup(user)
  end

  def send_message(to, sync) do
    Registry.Connection
    |> Registry.dispatch(to, fn entries ->
      Logger.info("dispatch to all clients for specific user, entries: #{inspect(entries)}")

      for {pid, _} <- entries do
        if pid != self() do
          send(pid, {:message, sync})
        end
      end
    end)
  end
end
