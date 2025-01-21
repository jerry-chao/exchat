defmodule ExchatWeb.MainLive.Index do
  use ExchatWeb, :live_view

  alias Exchat.Chat

  @impl true
  def mount(_params, session, socket) do
    case session do
      %{"user_token" => user_token} ->
        current_user = Exchat.Accounts.get_user_by_session_token(user_token)
        conversations = Chat.list_conversations(current_user.id)

        {:ok,
         socket
         |> assign(:current_user, current_user)
         |> stream(:mains, conversations)
         |> assign(:selected_conversation, nil)
         |> assign(:messages, [])
         |> assign(:uploaded_files, [])
         |> assign(:show_emoji_picker, nil)}

      _ ->
        {:ok,
         socket
         |> put_flash(:error, "You must be logged in to access this page")
         |> redirect(to: ~p"/users/log_in")}
    end
  end

  @impl true
  def handle_event("select_conversation", %{"id" => id}, socket) do
    conversation = Chat.get_conversation!(id)
    messages = Message.get_messages(conversation.cid)

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
          {:noreply, socket |> update(:messages, fn messages -> messages ++ [message] end)}

        {:error, _} ->
          {:noreply, socket |> put_flash(:error, "Failed to send message")}
      end
    else
      {:noreply, socket}
    end
  end
end
