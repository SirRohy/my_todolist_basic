import { useState } from "react";
import AddButton from "./components/AddButton";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoForm, showTodoForm] = useState(false);

  return (
    <main className="bg-slate-500 h-screen">
      <Navbar />
      <AddButton todoForm={todoForm} showTodoForm={showTodoForm} />
      {todoForm ? (
        <TodoForm Todo={new Todo()} todos={todos} setTodos={setTodos} showTodoForm={showTodoForm} />
      ) : (
        <div></div>
      )}
    </main>
  );
}
