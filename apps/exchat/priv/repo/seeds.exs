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
alias Exchat.{Talk, Repo, Message, User, Conversation}

test_conversation =
  Repo.insert!(%Conversation{
    title: "Testing Conversation"
  })

test_user_1 =
  Repo.insert!(%User{
    name: "John Doe",
    email: "john@example.com"
  })

test_user_2 =
  Repo.insert!(%User{
    name: "Jane Smith",
    email: "jane@example.com"
  })

Repo.insert!(%Message{
  content: "Hello Jane!",
  conversation_id: test_conversation.id,
  user_id: test_user_1.id
})

Repo.insert!(%Message{
  content: "Hi John, how are you?",
  conversation_id: test_conversation.id,
  user_id: test_user_2.id
})
