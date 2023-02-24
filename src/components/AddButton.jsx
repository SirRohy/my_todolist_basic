export default function AddButton({ todoForm, showTodoForm }) {
  return (
    <div className="flex justify-center">
      <button
        className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded m-4 w-40"
        onClick={() => showTodoForm(!todoForm)}
      >
        Add Todo
      </button>
    </div>
  );
}
