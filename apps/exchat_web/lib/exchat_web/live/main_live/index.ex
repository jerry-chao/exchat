defmodule ExchatWeb.MainLive.Index do
  require Logger
  use ExchatWeb, :live_view

  alias Exchat.Chat
  alias Exchat.Chat.Conversation

  @impl true
  def mount(_params, session, socket) do
    case session do
      %{"user_token" => user_token} ->
        current_user = Exchat.Accounts.get_user_by_session_token(user_token)
        conversations = Chat.list_conversations(current_user.id)
        Logger.metadata(user_id: current_user.id)
        Logger.info("conversations: #{inspect(conversations)}")
        Exchat.Session.register(current_user.id, [])

        {:ok,
         socket
         |> assign(:current_user, current_user)
         |> stream(:mains, conversations)
         |> assign(:selected_conversation, nil)
         |> assign(:messages, [])
         |> assign(:uploaded_files, [])
         |> assign(:show_new_conversation_modal, false)
         |> assign(:new_conversation_changeset, Chat.change_conversation(%Conversation{}))
         |> assign(:show_emoji_picker, nil)}

      _ ->
        {:ok,
         socket
         |> put_flash(:error, "You must be logged in to access this page")
         |> redirect(to: ~p"/users/log_in")}
    end
  end

  @impl true
  def handle_event("open_new_conversation_modal", _params, socket) do
    {:noreply, assign(socket, :show_new_conversation_modal, true)}
  end

  # 处理关闭模态框事件
  def handle_event("close_new_conversation_modal", _params, socket) do
    {:noreply, assign(socket, :show_new_conversation_modal, false)}
  end

  # 处理创建对话事件
  def handle_event("create_conversation", params, socket) do
    params = Map.merge(params, %{"user_id" => socket.assigns.current_user.id})

    case Chat.create_conversation(params) do
      {:ok, conversation} ->
        {:noreply,
         socket
         |> stream_insert(:mains, conversation)
         |> assign(:show_new_conversation_modal, false)
         |> put_flash(:info, "Conversation created successfully")}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply,
         assign(socket, :new_conversation_changeset, changeset)
         |> put_flash(:info, "Conversation created failed #{inspect(changeset)}")}
    end
  end

  @impl true
  def handle_event("select_conversation", %{"id" => id}, socket) do
    conversation = Chat.get_conversation!(id)
    messages = Message.get_messages(socket.assigns.current_user.id, conversation.cid)
    Logger.info("conversation: #{id}, message: #{inspect(messages)}")

    {:noreply,
     socket
     |> assign(:selected_conversation, conversation)
     |> assign(:messages, messages)}
  end

  @impl true
  def handle_event("send_message", %{"message" => content}, socket) do
    if socket.assigns.selected_conversation do
      result =
        Message.create_message(%{
          from: socket.assigns.current_user.id,
          to: socket.assigns.selected_conversation.cid,
          txt: content
        })

      case result do
        {:ok, message} ->
          # route message to other session
          Exchat.Session.send_message(socket.assigns.selected_conversation.cid, message)
          {:noreply, socket |> update(:messages, fn messages -> messages ++ [message] end)}

        {:error, _} ->
          {:noreply, socket |> put_flash(:error, "Failed to send message")}
      end
    else
      {:noreply, socket}
    end
  end

  @impl true
  def handle_info({:message, message}, socket) do
    Logger.info("receive message #{inspect(message)}")
    {:noreply, socket |> update(:messages, fn messages -> messages ++ [message] end)}
  end
end
