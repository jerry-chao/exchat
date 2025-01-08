defmodule Exchat.ChatFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Exchat.Chat` context.
  """

  @doc """
  Generate a conversation.
  """
  def conversation_fixture(attrs \\ %{}) do
    {:ok, conversation} =
      attrs
      |> Enum.into(%{
        cid: "some cid",
        name: "some name",
        type: "some type"
      })
      |> Exchat.Chat.create_conversation()

    conversation
  end
end
