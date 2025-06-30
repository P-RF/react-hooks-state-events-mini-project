import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  function handleDeleteTask(taskToDelete) {
    const updatedTasks = tasks.filter(
      (task) => task.text !== taskToDelete.text || task.category !== taskToDelete.category);
    setTasks(updatedTasks);
  }

  function handleAddNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  const visibleTasks = selectedCategory === "All"
    ? tasks : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onSelectedCategory={handleCategoryClick}
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleAddNewTask}
      />
      <TaskList 
        tasks={visibleTasks} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;
