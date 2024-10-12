import React from "react";

function Task({ task, index, toggleTaskCompletion, deleteTask }) {
  return (
    <div style={{ textDecoration: task.completed ? "line-through" : "none" }} className="task-list">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(index)}
      />
      {task.text}
      <button onClick={() => deleteTask(index)} className="btn">Remove</button>
    </div>
  );
}

export default Task;
