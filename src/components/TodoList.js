import React from "react";
import { useStore } from "../context";
import { TodoHeader } from "./TodoHeader";

const TodoList = () => {
  const {
    dispatch,
    state: { todos }
  } = useStore();

  let header = (
    <TodoHeader>
      <span className="float-right">There are .... todos.</span>
    </TodoHeader>
  );
  const handleCompleteClicked = (todo) => {
    dispatch({
      type: "COMPLETE",
      payload: todo
    });
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {todos.map((e, i) => {
                return (
                  <li
                    key={`todo-list-item-${i}`}
                    className="list-group-item"
                    data-testid="todo-element"
                  >
                    {e}
                    <button
                      onClick={() => handleCompleteClicked(e)}
                      className="float-right btn btn-danger btn-sm"
                      data-testid="todo-element-button"
                    >
                      Complete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
