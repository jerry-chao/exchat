# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of the Config module.
import Config

# Configure Mix tasks and generators
config :exchat,
  ecto_repos: [Exchat.Repo]

config :exchat_web,
  ecto_repos: [Exchat.Repo],
  generators: [context_app: :exchat]

config :message,
  ecto_repos: [Message.Repo]

# Configures the endpoint
config :exchat_web, ExchatWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [html: ExchatWeb.ErrorHTML, json: ExchatWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: Exchat.PubSub,
  live_view: [signing_salt: "EGTRJnVb"],
  server: true

# Configure esbuild (the version is required)
config :esbuild,
  version: "0.17.11",
  exchat_web: [
    args:
      ~w(js/app.js --bundle --target=es2017 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
    cd: Path.expand("../apps/exchat_web/assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

# Configure tailwind (the version is required)
config :tailwind,
  version: "3.4.0",
  exchat_web: [
    args: ~w(
      --config=tailwind.config.js
      --input=css/app.css
      --output=../priv/static/assets/app.css
    ),
    cd: Path.expand("../apps/exchat_web/assets", __DIR__)
  ]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :logger, :default_handler,
  config: [
    file: ~c"info.log",
    filesync_repeat_interval: 5000,
    file_check: 5000,
    max_no_bytes: 10_000_000,
    max_no_files: 5,
    compress_on_rotate: true
  ]

config :logger, :default_formatter,
  format: "\n$time $metadata[$level] $message\n",
  metadata: [:user_id, :pid, :file]

# Mailer configuration
config :exchat, Exchat.Mailer,
  adapter: Swoosh.Adapters.SMTP,
  relay: "smtp.qq.com",
  username: "462283159@qq.com",
  password: "imwuhuaxrnyacabb",
  ssl: true,
  tls: :never,
  auth: :always,
  port: 465,
  sockopts: [
    verify: :verify_none
  ]

# Import environment specific config
import_config "#{config_env()}.exs"
