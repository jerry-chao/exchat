defmodule ExchatWeb.ChatController do
  use ExchatWeb, :controller

  def index(conn, _params) do
    render(conn, :chat, layout: false)
  end
end
