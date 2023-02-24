import Todo from "./Todo";


export default function TodoForm({ Todo, todos, setTodos, showTodoForm }) {
  let urgent = Todo.urgent
  function handleSubmit () {
    e.preventDefault();
    const newTodo = new Todo(newTitle, newDescription, newDueDate);
    console.log(newTodo);
    // (somehow delete the last one)
    // setTodos [...todos, Todo]
    // (sort the Todo list based on sorting laws)
    // Todo.render()
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
            value={Todo.title}
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
            placeholder="Description"
            value={Todo.description}
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
            value={Todo.date}
          />
        </div>
        <label>
          <input type="checkbox" name="myCheckbox" value="0"></input>
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
