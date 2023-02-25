import { useEffect } from "react";
import { useState } from "react";
import Todo from "./Todo";
let tempTodo = new Todo (100000)

export default function TodoList({ todos, setTodos, currentOrder }) {
  const [editing, setEditing] = useState(null);
  
  function removeTodoById(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function editTodoById(todo) {
    setEditing(todo.id)
  }

  const saveTodo = (todo) => {
    setEditing(null);
    setTodos((previousTodos) => previousTodos.map((t) => (t.id === todo.id ? todo : t)));
    tempTodo.id = 100000
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleCancel = (todo) => {
    if (todo.id == tempTodo.id) {
      const updatedTodo = { ...tempTodo };
      const updatedTodos = todos.map(t => t.id === todo.id ? updatedTodo : t);
      setTodos(updatedTodos); // fricking update the todos PLEASE
    }
    setEditing(null)
  }
  //   console.log(id);
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     const newTodo = {
  //       id: Date.now(),
  //       title: newTitle,
  //       description: newDescription,
  //       dueDate: newDueDate,
  //       urgent: newUrgent,
  //     };
  
  //     const newTodos = [...todos, newTodo];
  //     setTodos(newTodos);
  //     localStorage.setItem("todos", JSON.stringify(newTodos));
  //     showTodoForm(false);
  //     console.log(setTodos);
  //   }
  //   setTodos(newTodos);
  //   localStorage.setItem("todos", JSON.stringify(newTodos));
  // }

  function sortTodos(law = currentOrder) {
    if (law === "chronological") {
      setTodos(todos.sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1)));
    } else if (law === "reverse chronological") {
      setTodos(todos.sort((a, b) => (a.dueDate < b.dueDate ? 1 : -1)));
    }
  }

  useEffect(() => {
    sortTodos();
  }, [currentOrder, todos]);

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const thisTodo = todos[todoIndex];
    if (tempTodo.id !== id) {
      tempTodo = { ...thisTodo }; // hopefully creates a copy of every characteristic exactly once
      
    }
    const updatedTodo = {
      ...todos[todoIndex],
      [name]: value,
    };
    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = updatedTodo;
    setTodos(updatedTodos);
  };

  return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
          {todos && todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex flex-wrap bg-${todo.urgent ? 'red-100' : 'slate-300'} py-2 rounded`}>
              {editing === todo.id ? (
                <>
                  <div className="w-full mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="title"
                      value={todo.title}
                      onChange={(e) => handleInputChange(todo.id, e)}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      Description
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="description"
                      value={todo.description}
                      onChange={(e) => handleInputChange(todo.id, e)}
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      Due Date
                    </label>
                    <input
                      type="date"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="dueDate"
                      value={todo.dueDate}
                      onChange={(e) => handleInputChange(todo.id, e)}
                    />
                  </div>
                  <div className="w-full flex justify-center">
                      <div className="mx-4">
                        <input type="checkbox" checked={todo.Urgent}
                        onChange={(e) => handleInputChange(todo.id, e)}/> Urgent
                      </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="border rounded px-2 mr-2 hover:bg-slate-400">
                      <button onClick={() => saveTodo(todo)}>Save</button>
                    </div>
                    <div className="border rounded px-2 hover:bg-slate-400">
                      <button onClick={() => handleCancel(todo)}>Cancel</button>
                    </div>

                  </div>
                </> ) : (
              <>
                <p className="w-full text-center text-2xl font-sans font-bold">
                  Title: {todo.title}
                </p>
                <p className="w-full text-center">
                  Description: {todo.description}
                </p>
                <p className="w-full text-center">Date: {todo.dueDate}</p>
                <div className="w-full flex justify-center">
                  <div className="mx-4">
                    <input type="checkbox" checked={todo.Urgent}/> Urgent
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <div className="border rounded px-2 mr-2 hover:bg-slate-400">
                    <button onClick={() => editTodoById(todo)}>Edit</button>
                  </div>
                  <div className="border rounded px-2 hover:bg-slate-400">
                    <button onClick={() => removeTodoById(todo.id)}>Remove</button>
                  </div>
                </div>
              </>
          )}
        </div>))
      } </div>)
}
