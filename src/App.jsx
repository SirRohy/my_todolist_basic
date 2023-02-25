import { useState } from "react";
import AddButton from "./components/AddButton";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import SortButton from "./components/SortButton";

export default function App() {
  const l = [
    new Todo("hello", "bruh why is this not in next line?", "2023-02-24", true),
    new Todo("hi", "next one", "2023-02-25", false),
  ];
  const localStorageTodos = localStorage.getItem("todos");
  let todoList = JSON.parse(localStorageTodos);

  const [todos, setTodos] = useState(todoList ? todoList : []);
  const [todoForm, showTodoForm] = useState(false);
  const [currentOrder, setOrder] = useState("chronological");

  return (
    <main className="bg-slate-500 h-screen">
      <Navbar />
      <AddButton todoForm={todoForm} showTodoForm={showTodoForm} />

      {todoForm ? (
        <TodoForm
          Todo={new Todo()}
          todos={todos}
          setTodos={setTodos}
          showTodoForm={showTodoForm}
        />
      ) : (
        <div></div>
      )}
      <SortButton currentOrder={currentOrder} setOrder={setOrder} />
      <TodoList todos={todos} setTodos={setTodos} currentOrder={currentOrder} />
    </main>
  );
}
