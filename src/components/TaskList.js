import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskItems = tasks.map((taskObj) => (
    <Task 
      key={taskObj.text}
      text={taskObj.text}
      category={taskObj.category}
      onDelete={() => onDeleteTask(taskObj)}
    />
  ))

  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;
