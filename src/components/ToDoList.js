import React from "react";

export const ToDoList = ({ taskList, switchTask, handleOnSelect }) => {
  console.log(taskList);
  return (
    <div className="">
      <table className="table stripped bordered hover">
        <thead>
          <tr>
            <th>Select</th>
            <th>Task Description</th>
            <th>Hours Allocated</th>
            <th>Move to done</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((item, i) => {
            return (
              <>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value={item._id}
                      onChange={handleOnSelect}
                    />
                  </td>
                  <td>{item.task}</td>
                  <td>{item.hour}</td>
                  <td>
                    {/* when we invoke the switchTask function we need to pass the unique of the selected task along with the string bad to change the task into bad task */}
                    {/* change the switchTask function into fatarrowfuunction to be able to invoke  */}
                    <button
                      onClick={() => switchTask(item._id, "done")}
                      className="btn btn-primary"
                    >
                      <i class="fa-solid fa-right-long"></i>
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
