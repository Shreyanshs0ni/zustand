import React, { useState } from "react";
import useStore from "./stores/store";

const App = () => {
  const [value, setValue] = useState();
  const { addTask, tasks, removeTask } = useStore((state) => state);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    addTask(value);
  };

  console.log("tasks", tasks);

  const handleRemoveClick = (task) => () => {
    removeTask(task);
    console.log("task", task);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter task"
        onChange={handleChange}
        value={value}
      />
      <button onClick={handleClick}>Add Task</button>
      <div>
        {tasks.map((task) => (
          <div key={task}>
            <h2>{task}</h2>
            <button onClick={handleRemoveClick(task)}> remove </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
