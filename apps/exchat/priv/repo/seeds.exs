# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Exchat.Repo.insert!(%Exchat.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Exchat.{Accounts, Chat, Repo}

# Register users
{:ok, user1} =
  Accounts.register_user(%{
    name: "John Doe",
    email: "john@example.com",
    password: "F15871686786h",
    password_confirmation: "F15871686786h"
  })

{:ok, user2} =
  Accounts.register_user(%{
    name: "Jane Smith",
    email: "jane@example.com",
    password: "F15871686786h",
    password_confirmation: "F15871686786h"
  })

{:ok, user3} =
  Accounts.register_user(%{
    name: "Bob Wilson",
    email: "bob@example.com",
    password: "F15871686786h",
    password_confirmation: "F15871686786h"
  })

{:ok, user4} =
  Accounts.register_user(%{
    name: "Alice Brown",
    email: "alice@example.com",
    password: "F15871686786h",
    password_confirmation: "F15871686786h"
  })

{:ok, user5} =
  Accounts.register_user(%{
    name: "Charlie Davis",
    email: "charlie@example.com",
    password: "F15871686786h",
    password_confirmation: "F15871686786h"
  })

# Create test conversations
Repo.insert!(%Chat.Conversation{
  name: "General Chat",
  type: "private",
  cid: user2.id,
  user_id: user1.id
})

Repo.insert!(%Chat.Conversation{
  name: "Tech Discussion",
  type: "private",
  cid: user3.id,
  user_id: user1.id
})

# Create some private conversations
Repo.insert!(%Chat.Conversation{
  name: "John-Jane Chat",
  type: "private",
  cid: user4.id,
  user_id: user1.id
})

Repo.insert!(%Chat.Conversation{
  name: "Project Alpha",
  type: "private",
  cid: user5.id,
  user_id: user1.id
})
