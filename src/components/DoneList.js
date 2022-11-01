import React from "react";

export const DoneList = ({ taskList, switchTask, handleOnSelect }) => {
  return (
    <div>
      {" "}
      <div className="">
        <table className="table stripped bordered hover">
          <thead>
            <tr>
              <th>Select</th>
              <th>Task Description</th>
              <th>Hours Allocated</th>
              <th>Move to To Do</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((item, i) => {
              return (
                <tr>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value={item._id}
                      onChange={handleOnSelect}
                    />
                  </td>
                  <td>{item.task}</td>
                  <td>{item.hour + " hour"}</td>
                  <td>
                    <button
                      onClick={() => switchTask(item._id, "entry")}
                      class="btn btn-danger"
                    >
                      <i class="fa-solid fa-left-long"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
