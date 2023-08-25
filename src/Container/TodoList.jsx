import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./Todolist.css";
const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <div className="container">
        <div className="flexStyle">
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Add a new task"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask(e.target.value);
                e.target.value = "";
              }
            }}
          />
          <div>
            <p>Total tasks: {totalTasks}</p>
            <p>Completed tasks: {completedTasks}</p>
          </div>
          <ol>
            {tasks.map((task, index) => (
              <TodoItem
                key={index}
                index={index}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
