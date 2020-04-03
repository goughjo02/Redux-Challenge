import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
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
  )

  // spy and asserts here
  
});

test("<TodoList /> #completeCalls", async () => {
  const todos = ["a", "b", "c"];
  const dispatch = jest.fn();
  render( 
    <Store.Provider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </Store.Provider>
  )
  // spy and asserts here
});

test("<TodoList /> #completeLast", async () => {
  let state = { todos: ["a", "b", "c"] };
  const dispatch = action => {
    state = reducer(state, action);
  };
  render( 
    <Store.Provider value={{ state, dispatch }}>
      <TodoList />
    </Store.Provider>
  )
  // spy and asserts here
});
