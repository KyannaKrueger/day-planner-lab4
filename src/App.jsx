import { useState } from "react";
import "./App.css";
import Task from "./components/Task";  
import TaskForm from "./components/TaskForm";  

function App() {
  const [tasks, setTasks] = useState([]);  
  const [taskText, setTaskText] = useState("");  
  const [filter, setFilter] = useState("all"); 

  const addTask = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText("");  
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const pendingTasks = tasks.filter(task => !task.completed).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });
  

  return (
    <div className="app">
      <header> 
        <h1>Daily Planner</h1>
      </header>
      <TaskForm taskText={taskText} setTaskText={setTaskText} addTask={addTask} />
      <h2>You have {pendingTasks} tasks remaining. Keep up the good work!</h2>


      <div className="filter-buttons">
        <button onClick={() => setFilter("all")} className="filter-btn">All</button>
        <button onClick={() => setFilter("completed")} className="filter-btn">Completed</button>
        <button onClick={() => setFilter("pending")} className="filter-btn">Pending</button>
      </div>

      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              index={index}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
          ))
        ) : (
          tasks.length > 0 && <p>No tasks to display</p>
        )}
      </div>
    </div>
  );
}

export default App;

