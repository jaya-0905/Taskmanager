// src/api.js
//we need api to interact with data without any backend server
let tasks = [
  { id: 1, title: "Sample Task 1", description: "This is a sample task." },
];

export const getTasks = () => Promise.resolve([...tasks]);

export const getTaskById = (id) =>
  Promise.resolve(tasks.find((task) => task.id === Number(id)));

export const createTask = (task) => {
  const newTask = { id: Date.now(), ...task };
  tasks.push(newTask);
  return Promise.resolve(newTask);
};

export const updateTask = (id, updatedTask) => {
  tasks = tasks.map((task) =>
    task.id === Number(id) ? { ...task, ...updatedTask } : task
  );
  return Promise.resolve();
};

export const deleteTask = (id) => {
  tasks = tasks.filter((task) => task.id !== Number(id));
  return Promise.resolve();
};
