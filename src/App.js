import { useState } from "react";
import "./App.css";
import { DisplayField } from "./components/DisplayField";
import { InputField } from "./components/InputField";
import { Title } from "./components/Title";

function App() {
  const [taskList, setTaskList] = useState([]);
  // create a new useState to store the information of the selected task to be deleted
  const [taskToDelete, setTaskDeleteList] = useState([]);

  // create a function to get the object created from the input.
  const addTask = (data) => {
    setTaskList([...taskList, data]);
    console.log(taskList);
  };
  // create a function to switch the task from the todolist to donelist
  // get the item.id as id and the string bad as a type
  const switchTask = (_id, type) => {
    // again filter the tasklist array with the condition when the id of the original item and the clicked id matched changes the type of the original item into bad type
    console.log("clicked", _id, type);
    const tempArg = taskList.map((item) => {
      if (item._id === _id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(tempArg);
  };

  const handleOnSelect = (e) => {
    // destructuring the value which is the id and checked staus gained from the input type
    const { value, checked } = e.target;
    console.log(value, checked);
    checked
      ? setTaskDeleteList([...taskToDelete, value])
      : setTaskDeleteList(taskToDelete.filter((item) => item !== value));
  };

  const deleteTask = () => {
    setTaskList(taskList.filter((item) => !taskToDelete.includes(item._id)));
    setTaskDeleteList([]);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <InputField
          addTask={addTask}
          taskList={taskList}
          handleOnSelect={handleOnSelect}
        />
        <DisplayField
          taskList={taskList}
          switchTask={switchTask}
          handleOnSelect={handleOnSelect}
        />
        {taskToDelete.length > 0 && (
          <div className="d-grid g-2">
            <button onClick={deleteTask} className="btn btn-danger">
              Delete the selected task ({taskToDelete.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
