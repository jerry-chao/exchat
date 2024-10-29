# Used by "mix format"
[
  inputs: Enum.flat_map(["mix.exs", "config/*.exs", "apps/*/lib/**/*.{ex,exs}", "apps/*/test/*.exs"], &Path.wildcard(&1, match_dot: true)) -- Path.wildcard("apps/*/lib/**/*.pb.ex", match_dot: true)
]
