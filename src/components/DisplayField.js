import React from "react";
import { DoneList } from "./DoneList";
import { ToDoList } from "./ToDoList";

export const DisplayField = ({ taskList, switchTask }) => {
  // capture the task tasklist and filter the array according to the type of the array
  const entryList = taskList.filter((item) => item.type === "entry");
  const doneList = taskList.filter((item) => item.type === "done");
  return (
    <div className="row mt-5">
      <div className="col bg-blue">
        {" "}
        <h2 className="text-center">To Do Task </h2>
        <ToDoList taskList={entryList} switchTask={switchTask} />
      </div>

      <div className="col">
        {" "}
        <h2 className="text-center">Done Task </h2>
        <DoneList taskList={doneList} switchTask={switchTask} />
      </div>
    </div>
  );
};
