defmodule ExchatWeb.MainLive.Index do
  use ExchatWeb, :live_view

  alias Exchat.Chat

  @impl true
  def mount(_params, session, socket) do
    case session do
      %{"user_token" => user_token} ->
        current_user = Exchat.Accounts.get_user_by_session_token(user_token)

        {:ok,
         socket
         |> assign(:current_user, current_user)
         |> stream(:mains, Chat.list_conversations(current_user.id))
         |> assign(:selected_conversation, nil)
         |> assign(:messages, [])}

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
      message =
        Message.create_message(%{
          from: socket.assigns.current_user.id,
          to: socket.assigns.selected_conversation.cid,
          txt: content
        })

      {:noreply,
       socket
       |> update(:messages, fn messages -> messages ++ [message] end)}
    else
      {:noreply, socket}
    end
  end
end
