defmodule Connection.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Starts a worker by calling: Connection.Worker.start_link(arg)
      # {Connection.Worker, arg}
      Plug.Cowboy.child_spec(
        scheme: :http,
        plug: Connection.Router,
        options: [dispatch: dispatch(), port: 4000]
      ),
      Registry.child_spec(
        keys: :duplicate,
        name: Registry.Connection
      )
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Connection.Supervisor]
    Supervisor.start_link(children, opts)
  end

  def dispatch() do
    [
      {:_,
       [
         {"/ws/[...]", Connection.SocketHandler, []},
         {:_, Plug.Cowboy.Handler, {Connection.Router, []}}
       ]}
    ]
  end
end
