defmodule Exchat.ChatTest do
  use Exchat.DataCase

  alias Exchat.Chat

  describe "conversations" do
    alias Exchat.Chat.Conversation

    import Exchat.ChatFixtures

    @invalid_attrs %{name: nil, type: nil, cid: nil}

    test "list_conversations/0 returns all conversations" do
      conversation = conversation_fixture()
      assert Chat.list_conversations() == [conversation]
    end

    test "get_conversation!/1 returns the conversation with given id" do
      conversation = conversation_fixture()
      assert Chat.get_conversation!(conversation.id) == conversation
    end

    test "create_conversation/1 with valid data creates a conversation" do
      valid_attrs = %{name: "some name", type: "some type", cid: "some cid"}

      assert {:ok, %Conversation{} = conversation} = Chat.create_conversation(valid_attrs)
      assert conversation.name == "some name"
      assert conversation.type == "some type"
      assert conversation.cid == "some cid"
    end

    test "create_conversation/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Chat.create_conversation(@invalid_attrs)
    end

    test "update_conversation/2 with valid data updates the conversation" do
      conversation = conversation_fixture()

      update_attrs = %{
        name: "some updated name",
        type: "some updated type",
        cid: "some updated cid"
      }

      assert {:ok, %Conversation{} = conversation} =
               Chat.update_conversation(conversation, update_attrs)

      assert conversation.name == "some updated name"
      assert conversation.type == "some updated type"
      assert conversation.cid == "some updated cid"
    end

    test "update_conversation/2 with invalid data returns error changeset" do
      conversation = conversation_fixture()
      assert {:error, %Ecto.Changeset{}} = Chat.update_conversation(conversation, @invalid_attrs)
      assert conversation == Chat.get_conversation!(conversation.id)
    end

    test "delete_conversation/1 deletes the conversation" do
      conversation = conversation_fixture()
      assert {:ok, %Conversation{}} = Chat.delete_conversation(conversation)
      assert_raise Ecto.NoResultsError, fn -> Chat.get_conversation!(conversation.id) end
    end

    test "change_conversation/1 returns a conversation changeset" do
      conversation = conversation_fixture()
      assert %Ecto.Changeset{} = Chat.change_conversation(conversation)
    end
  end
end
