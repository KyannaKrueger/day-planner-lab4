import { useState } from "react";
import "./App.css";
import Task from "./components/Task";  
import TaskForm from "./components/TaskForm";  

function App() {
  const [tasks, setTasks] = useState([]);  
  const [taskText, setTaskText] = useState("");  

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

  return (
    <>
      <body>
        <div id="root">
        <div className="app">
          <header> 
            <h1>Daily Planner</h1>
            </header>
          <h2>You have {pendingTasks} tasks remaining. Keep up the good work!</h2>

          <TaskForm taskText={taskText} setTaskText={setTaskText} addTask={addTask} />

          <div className="task-list">
            {tasks.map((task, index) => (
              <Task
                key={index}
                task={task}
                index={index}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
        </div>
      </body>
    </>
  );
}

export default App;
