import React from "react";

const TodoForm = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <br />
        <div className="input-group">
            {/* input here */}
            {/* use for input class 'form-control' and attribute data-testid='input' */}
          <div className="input-group-append">
            {/* button here */}
            {/* use for button class `btn btn-primary` and text `Add` */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoForm
