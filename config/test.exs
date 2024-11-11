import Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :exchat, Exchat.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "postgres",
  database: "exchat_test#{System.get_env("MIX_TEST_PARTITION")}",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: System.schedulers_online() * 2

config :message, Message.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "postgres",
  database: "message_test#{System.get_env("MIX_TEST_PARTITION")}",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: System.schedulers_online() * 2

config :connection, port: 4003

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :exchat_web, ExchatWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "U0KCzFI/xjXEcbPoIYTAt0f1qLcFmmu7Sr+MszQGg2u9UpE9XLzKKGcmBEP3KFQH",
  server: false

# Print only warnings and errors during test
config :logger, level: :warning

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime

config :phoenix_live_view,
  # Enable helpful, but potentially expensive runtime checks
  enable_expensive_runtime_checks: true
