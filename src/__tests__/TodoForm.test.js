import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Store from "../context";
import TodoForm from "../components/TodoForm";

test("<TodoForm /> #addTodo", async () => {
  const dispatch = jest.fn();

  render(
    <Store.Provider value={{ dispatch }}>
      <TodoForm />
    </Store.Provider>
  );
  const newTodo = "some new todo";

  const textInput = screen.getByTestId("input");
  const addButton = screen.getByText("Add");

  userEvent.type(textInput, newTodo);
  userEvent.click(addButton);

  expect(dispatch).toBeCalledWith({
    type: "ADD_TODO",
    payload: newTodo
  });
});
