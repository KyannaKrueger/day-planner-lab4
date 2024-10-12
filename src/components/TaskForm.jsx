import React from "react";

function TaskForm({ taskText, setTaskText, addTask }) {
  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        placeholder="new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit" className="btn-primary">Save</button>
    </form>
  );
}

export default TaskForm;
