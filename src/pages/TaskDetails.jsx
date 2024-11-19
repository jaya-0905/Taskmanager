// src/pages/TaskDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTaskById } from "../api";

const TaskDetails = () => {
  const { id } = useParams(); // Retrieves the task ID from the URL
  const [task, setTask] = useState(null);

  useEffect(() => {
    // Fetch the task details by ID
    getTaskById(id).then((data) => {
      setTask(data);
    });
  }, [id]);

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Task Details</h2>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetails;
