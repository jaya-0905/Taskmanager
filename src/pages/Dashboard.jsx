import React, { useState, useEffect } from "react";
import { getTasks, createTask, deleteTask } from "../api";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Header from "../components/Header";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const handleAddTask = (task) => {
    createTask(task).then((newTask) => setTasks([...tasks, newTask]));
  };

  const handleDeleteTask = (id) => {
    deleteTask(id).then(() => setTasks(tasks.filter((task) => task.id !== id)));
  };

  return (
    <div className="container my-4">
      <h2 className="text-center text-primary mb-4">Task Dashboard</h2>
      <div className="mb-4">
        <TaskForm onSubmit={handleAddTask} />
      </div>
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default Dashboard;
