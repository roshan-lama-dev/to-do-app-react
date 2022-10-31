import React, { useState } from "react";
import { randomStrGenerator } from "../utils";

export const InputField = ({ addTask }) => {
  const [form, setForm] = useState({ type: "entry" });

  //   adding the attribute handleOnchange to the input field and creating a function e gives the synthethic event, target gives the whole div ,and value gives the input vlaue in realtime

  //   we need to store the value from the input field
  const handleOnChange = (e) => {
    // console.log(e.target.value);

    // destructuring the value and name
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    console.log(form);
  };

  const handleOnSubmit = (e) => {
    // To prevent the page from reloading everytime we hit submit
    e.preventDefault();
    const _id = randomStrGenerator();
    addTask({ ...form, _id });
    console.log(addTask);
  };
  return (
    <div className="mt-5">
      <div className="row">
        <form onSubmit={handleOnSubmit}>
          <div className="col">
            <input
              name="task"
              type="text"
              placeholder="Enter your to do task"
              className="form-control"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col">
            <input
              name="hour"
              type="number"
              placeholder="Enter estimated Hours"
              className="form-control"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col">
            <button className="btn btn-success" type="submit">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
