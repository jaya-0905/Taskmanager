// src/components/TaskList.jsx
import React from "react";
import { Link } from "react-router-dom";

function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <Link
              to={`/task/${task.id}`}
              className="text-decoration-none text-primary"
            >
              {task.title}
            </Link>
            <p>{task.description}</p>
          </div>
          <button
            onClick={() => onDelete(task.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
