defmodule Exchat.Chat do
  import Ecto.Query
  alias Exchat.Repo
  alias Exchat.Chat.Conversation

  @doc """
  Creates a single-user conversation.
  """
  def create_single_conversation(attrs) do
    %Conversation{}
    |> Conversation.changeset(Map.merge(attrs, %{type: "single"}))
    |> Repo.insert()
  end

  @doc """
  Creates a group conversation.
  """
  def create_group_conversation(attrs) do
    %Conversation{}
    |> Conversation.changeset(Map.merge(attrs, %{type: "group"}))
    |> Repo.insert()
  end

  @doc """
  Lists all conversations for a user with latest message.
  """
  def list_conversations(user_id) do
    Conversation
    |> where([c], c.user_id == ^user_id)
    |> join(:left, [c], m in assoc(c, :messages),
      on:
        m.id in fragment(
          "SELECT id FROM messages WHERE conversation_id = ? ORDER BY inserted_at DESC LIMIT 1",
          c.id
        )
    )
    |> preload([c, m], messages: m)
    |> Repo.all()
  end

  @doc """
  Gets or creates a single-user conversation.
  """
  def get_or_create_single_conversation(user_id, target_id) do
    case Repo.get_by(Conversation, user_id: user_id, cid: target_id, type: "single") do
      nil ->
        create_single_conversation(%{
          user_id: user_id,
          cid: target_id,
          # You might want to fetch target user's name here
          name: nil
        })

      conversation ->
        {:ok, conversation}
    end
  end

  alias Exchat.Chat.Conversation

  @doc """
  Returns the list of conversations.

  ## Examples

      iex> list_conversations()
      [%Conversation{}, ...]

  """
  def list_conversations do
    Repo.all(Conversation)
  end

  @doc """
  Gets a single conversation.

  Raises `Ecto.NoResultsError` if the Conversation does not exist.

  ## Examples

      iex> get_conversation!(123)
      %Conversation{}

      iex> get_conversation!(456)
      ** (Ecto.NoResultsError)

  """
  def get_conversation!(id), do: Repo.get!(Conversation, id)

  @doc """
  Creates a conversation.

  ## Examples

      iex> create_conversation(%{field: value})
      {:ok, %Conversation{}}

      iex> create_conversation(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_conversation(attrs \\ %{}) do
    %Conversation{}
    |> Conversation.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a conversation.

  ## Examples

      iex> update_conversation(conversation, %{field: new_value})
      {:ok, %Conversation{}}

      iex> update_conversation(conversation, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_conversation(%Conversation{} = conversation, attrs) do
    conversation
    |> Conversation.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a conversation.

  ## Examples

      iex> delete_conversation(conversation)
      {:ok, %Conversation{}}

      iex> delete_conversation(conversation)
      {:error, %Ecto.Changeset{}}

  """
  def delete_conversation(%Conversation{} = conversation) do
    Repo.delete(conversation)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking conversation changes.

  ## Examples

      iex> change_conversation(conversation)
      %Ecto.Changeset{data: %Conversation{}}

  """
  def change_conversation(%Conversation{} = conversation, attrs \\ %{}) do
    Conversation.changeset(conversation, attrs)
  end
end
