defmodule Exchat.ChatFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Exchat.Chat` context.
  """

  @doc """
  Generate a conversation.
  """
  def conversation_fixture(attrs \\ %{}) do
    attrs =
      attrs
      |> Enum.into(%{
        user_id: 2,
        cid: 3,
        name: "John Doe",
        type: "single"
      })

    IO.puts("attrs #{inspect(attrs)}")

    {:ok, conversation} = attrs |> Exchat.Chat.create_conversation()

    conversation
  end
end
