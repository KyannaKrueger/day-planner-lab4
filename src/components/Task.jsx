import React from "react";

function Task({ task, index, toggleTaskCompletion, deleteTask }) {

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(index)}
        disabled={task.completed}  
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)} className="remove-btn">Remove</button>
    </div>
  );
}

export default Task;

