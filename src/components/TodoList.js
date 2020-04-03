import React from "react";
import { TodoHeader } from "./TodoHeader";

const TodoList = () =>{

  let header = (
    <TodoHeader>
      <span className="float-right">There are .... todos.</span>
    </TodoHeader>);
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
              {/* use please class for list element 'list-group-item' and data-testid="todo-element" */}
              {/* use for complete button class `float-right btn btn-danger btn-sm` and data-testid="todo-element-button" */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList
