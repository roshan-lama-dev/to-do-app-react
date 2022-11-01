import { useState } from "react";
import "./App.css";
import { DisplayField } from "./components/DisplayField";
import { InputField } from "./components/InputField";
import { Title } from "./components/Title";

function App() {
  const [taskList, setTaskList] = useState([]);

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
    console.log(e.target.value, e.target.checked);
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
      </div>
    </div>
  );
}

export default App;
