import React from 'react';
let todoId = 0;
export default class Todo extends React.Component {
  constructor(title="", description="", due_date="", is_urgent=false) {
    super();
    this.id = todoId++;
    this.title = title;
    this.description = description;
    this.dueDate = due_date;
    this.urgent = is_urgent;
  }

  render() {
    return (
      <div className="relative  bg-slate-300">
        <strong>Title: {todo.title}</strong> <br />
        <p>Description: {todo.description}</p> <br />
        <p>Date: {todo.dueDate}</p>
        <label>
            <input type="checkbox" checked={todo.urgent} /> Urgent
        </label>
        <input type="checkbox" name="myCheckbox" value="1" />
      </div>
    );
  }
}
