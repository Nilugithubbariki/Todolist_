// TodoItem.js
import React from "react";
import "./Todolist.css";
const TodoItem = ({ index, task, toggleTask, deleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)} className="DeleteStyle">
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
