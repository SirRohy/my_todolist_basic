import { useState } from 'react';

function Toolbar({ onAddItem, onEditItem, onDelItem }) {

}


function TodoItem({ title, description, due_date }) {
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newDueDate, setNewDueDate] = useState(due_date);
  
    const handleEditClick = () => {
      setEditing(true);
    };
  
    const handleSaveClick = () => {
      // Save changes to title, description, and due_date to server here
      setEditing(false);
    };
  
    const handleCancelClick = () => {
      setEditing(false);
      // Reset newTitle, newDescription, and newDueDate to original values here
      setNewTitle(title);
      setNewDescription(description);
      setNewDueDate(due_date);
    };
  
    return (
      <div className="todo-item">
        {editing ? (
          <div className="todo-item-edit">
            <label htmlFor="title-input">Title:</label>
            <input
              id="title-input"
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <br />
            <label htmlFor="description-input">Description:</label>
            <textarea
              id="description-input"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <br />
            <label htmlFor="due-date-input">Due date:</label>
            <input
              id="due-date-input"
              type="date"
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
            />
            <br />
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        ) : (
          <div className="todo-item-display">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Due date: {due_date}</p>
            <button onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </div>
    );
  }

function createNewTodoItem () {
    
}
// class TodoItem {
//     done = false
//     constructor(title, description, due_date) {
//         this.title = title
//         this.description = description
//         this.due_date = due_date
//     }

// }

export default function TodoItems () {
    function createNewTodoItem () {

    }
    // const products = [
    //     { title: 'Cabbage', id: 1 },
    //     { title: 'Garlic', id: 2 },
    //     { title: 'Apple', id: 3 },
    //   ];
    // const listItems = products.map(product =>
    //     <li key={product.id}>
    //       {product.title}
    //     </li>
    // );
    
    // return (
    //     <div class="absolute top-[50] bg-red-300">
    //         <ul>{listItems}</ul>
    //     </div>
    // );

    return (
        <div>
          <TodoItem
            title="Finish homework"
            description="Complete all assignments for math and science classes"
            due_date="2023-03-01"
          />
          <TodoItem
            title="Buy groceries"
            description="Pick up milk, bread, and eggs from the store"
            due_date="2023-02-25"
          />
        </div>
      );
}