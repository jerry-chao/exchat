defmodule Exchat.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      Exchat.Repo,
      {DNSCluster, query: Application.get_env(:exchat, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Exchat.PubSub}
      # Start a worker by calling: Exchat.Worker.start_link(arg)
      # {Exchat.Worker, arg}
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: Exchat.Supervisor)
  end
end
