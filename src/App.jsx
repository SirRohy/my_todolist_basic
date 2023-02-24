import { useState } from "react";
import AddButton from "./components/AddButton";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoForm, showTodoForm] = useState(false);

  return (
    <main className="bg-slate-500 h-screen">
      <Navbar />
      <AddButton todoForm={todoForm} showTodoForm={showTodoForm} />
      {todoForm ? (
        <TodoForm setTodos={setTodos} showTodoForm={showTodoForm} />
      ) : (
        <div></div>
      )}
    </main>
  );
}
