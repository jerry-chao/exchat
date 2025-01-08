defmodule ExchatWeb.MainLiveTest do
  use ExchatWeb.ConnCase

  import Phoenix.LiveViewTest
  import Exchat.ChatFixtures

  @create_attrs %{}
  @update_attrs %{}
  @invalid_attrs %{}

  defp create_main(_) do
    main = main_fixture()
    %{main: main}
  end

  describe "Index" do
    setup [:create_main]

    test "lists all mains", %{conn: conn} do
      {:ok, _index_live, html} = live(conn, ~p"/mains")

      assert html =~ "Listing Mains"
    end

    test "saves new main", %{conn: conn} do
      {:ok, index_live, _html} = live(conn, ~p"/mains")

      assert index_live |> element("a", "New Main") |> render_click() =~
               "New Main"

      assert_patch(index_live, ~p"/mains/new")

      assert index_live
             |> form("#main-form", main: @invalid_attrs)
             |> render_change() =~ "can&#39;t be blank"

      assert index_live
             |> form("#main-form", main: @create_attrs)
             |> render_submit()

      assert_patch(index_live, ~p"/mains")

      html = render(index_live)
      assert html =~ "Main created successfully"
    end

    test "updates main in listing", %{conn: conn, main: main} do
      {:ok, index_live, _html} = live(conn, ~p"/mains")

      assert index_live |> element("#mains-#{main.id} a", "Edit") |> render_click() =~
               "Edit Main"

      assert_patch(index_live, ~p"/mains/#{main}/edit")

      assert index_live
             |> form("#main-form", main: @invalid_attrs)
             |> render_change() =~ "can&#39;t be blank"

      assert index_live
             |> form("#main-form", main: @update_attrs)
             |> render_submit()

      assert_patch(index_live, ~p"/mains")

      html = render(index_live)
      assert html =~ "Main updated successfully"
    end

    test "deletes main in listing", %{conn: conn, main: main} do
      {:ok, index_live, _html} = live(conn, ~p"/mains")

      assert index_live |> element("#mains-#{main.id} a", "Delete") |> render_click()
      refute has_element?(index_live, "#mains-#{main.id}")
    end
  end

  describe "Show" do
    setup [:create_main]

    test "displays main", %{conn: conn, main: main} do
      {:ok, _show_live, html} = live(conn, ~p"/mains/#{main}")

      assert html =~ "Show Main"
    end

    test "updates main within modal", %{conn: conn, main: main} do
      {:ok, show_live, _html} = live(conn, ~p"/mains/#{main}")

      assert show_live |> element("a", "Edit") |> render_click() =~
               "Edit Main"

      assert_patch(show_live, ~p"/mains/#{main}/show/edit")

      assert show_live
             |> form("#main-form", main: @invalid_attrs)
             |> render_change() =~ "can&#39;t be blank"

      assert show_live
             |> form("#main-form", main: @update_attrs)
             |> render_submit()

      assert_patch(show_live, ~p"/mains/#{main}")

      html = render(show_live)
      assert html =~ "Main updated successfully"
    end
  end
end
