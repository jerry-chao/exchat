# Used by "mix format"
[
  plugins: [Phoenix.LiveView.HTMLFormatter],
  inputs: Enum.flat_map(["mix.exs", "config/*.exs", "apps/*/mix.exs", "apps/*/lib/**/*.{ex,exs,heex}", "apps/*/priv/**/*.{ex,exs}", "apps/*/test/**/*.{ex,exs}"], &Path.wildcard(&1, match_dot: true)) -- Path.wildcard("apps/*/lib/**/*.pb.ex", match_dot: true)
]
