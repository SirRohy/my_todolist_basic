// import Todo from "./Todo";
import React, { useState } from "react";

export default function TodoForm({ Todo, todos, setTodos, showTodoForm }) {
  const [newTitle, setNewTitle] = useState(Todo.title);
  const [newDescription, setNewDescription] = useState(Todo.description);
  const [newDueDate, setNewDueDate] = useState(Todo.setTodos);
  const [newUrgent, setNewUrgent] = useState(Todo.urgent);
  
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate,
      urgent: newUrgent,
    };
    setTodos([...todos, newTodo]);
    sortTodos("chronological");
    showTodoForm(false);
    console.log(setTodos);
    // I am assuming it already renders the todolist here but it doesn't
  }

  return (
    <div className="w-full flex justify-center">
      <form className="bg-slate-600 shadow-md rounded px-8 pt-6 pb-8 w-8/12 max-w-screen-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-slate-300 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Your title here"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-slate-300 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-slate-300 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            placeholder="Your date here"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
        </div>
        <label>
          <input type="checkbox" name="urgent" checked={newUrgent} onChange={(e) => {
            setNewUrgent(e.target.checked);
          }} />
          Urgent?
        </label>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mx-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              showTodoForm(false);
            }}
          >
            Add
          </button>
          <button
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mx-4"
            onClick={(e) => {
              e.preventDefault();
              showTodoForm(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
