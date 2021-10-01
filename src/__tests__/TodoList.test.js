import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import Store from "../context";
import reducer from "../reducer";
import TodoList from "../components/TodoList";

test("<TodoList /> #display", async () => {
  const todos = ["a", "b", "c"];
  const dispatch = () => {};

  render(
    <Store.Provider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </Store.Provider>
  );

  todos.forEach((e) => {
    screen.getByText(e);
  });
  expect(screen.getAllByTestId("todo-element").length).toBe(3);
  expect(screen.getAllByTestId("todo-element-button").length).toBe(3);
});

test("<TodoList /> #completeCalls", async () => {
  const todos = ["a", "b", "c"];
  const dispatch = jest.fn();
  render(
    <Store.Provider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </Store.Provider>
  );
  screen.getAllByTestId("todo-element-button").forEach((e) => {
    userEvent.click(e);
  });
  expect(dispatch).toHaveBeenCalledTimes(3);
});

test("<TodoList /> #completeLast", async () => {
  let state = { todos: ["a", "b", "c"] };
  const dispatch = (action) => {
    state = reducer(state, action);
  };
  render(
    <Store.Provider value={{ state, dispatch }}>
      <TodoList />
    </Store.Provider>
  );
  const allButtons = screen.getAllByTestId("todo-element-button");
  const lastButton = allButtons[allButtons.length - 1];
  userEvent.click(lastButton);
  let expectedState = { todos: ["a", "b"] };
  expect(state).toEqual(expectedState)
});
