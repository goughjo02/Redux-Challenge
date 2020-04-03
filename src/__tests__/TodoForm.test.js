import '@testing-library/jest-dom'
import React from "react";
import {render, fireEvent, screen} from '@testing-library/react'

import Store from "../context";
import TodoForm from "../components/TodoForm";

test("<TodoForm /> #addTodo", async () => {
  const dispatch = jest.fn();

  render( 
    <Store.Provider value={{ dispatch }}>
      <TodoForm />
    </Store.Provider>
  )

  // spy and asserts here
});
