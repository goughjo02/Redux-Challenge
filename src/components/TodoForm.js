import React from "react";
import { useState } from "react/cjs/react.development";
import { useStore } from "../context";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useStore();
  const handleInputChange = (event) => {
    const { value: newValue } = event.target;
    setValue(newValue);
  };
  const handleSubmit = () => {
    dispatch({
      type: "ADD_TODO",
      payload: value
    });
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <br />
        <div className="input-group">
          <label htmlFor="add-todo">Enter new todo</label>
          <input
            id="add-todo"
            type="text"
            className="form-control"
            data-testid="input"
            value={value}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
