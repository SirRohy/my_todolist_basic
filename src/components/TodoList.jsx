import Todo from "./Todo";
import { useState } from "react";
import SortButton from "./SortButton";
import TodoForm from "./TodoForm";

export default function TodoList({todos, setTodos, currentOrder}) {

  function removeTodoByIndex(index) {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.index !== index);
    });
  }

  function sortTodos(law = currentOrder) {
    if (law === "chronological") {
      setTodos(todos.sort((a, b) => a.dueDate > b.dueDate ? 1 : -1));
    } else if (law === "reverse chronological") {
      setTodos(todos.sort((a, b) => a.dueDate > b.dueDate ? 1 : -1).reverse());
    }
  }

  return (
    <div className="todo-list">
    {todos.map(todo => (
        <div key={todo.index} className="todo-item relative flex flex-auto bg-slate-300 py-2 rounded m-4 w-100">
            <strong>Title: {todo.title}</strong> <br />
            <p>Description: {todo.description}</p> <br />
            <p>Date: {todo.dueDate}</p> <br />
            <label>
                <input type="checkbox" checked={todo.urgent} /> Urgent
            </label>
            {/* <button onClick={()=>TodoForm(Todo, todos, setTodos, showTodoForm)}>Edit</button> */}
            <button onClick={() => removeTodoByIndex(todo.index)}>Remove</button>
        </div>
    ))}
    </div>
  );
}