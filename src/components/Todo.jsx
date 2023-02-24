import React from 'react';
export default class Todo extends React.Component {
  constructor(title="", description="", due_date="", is_urgent=false) {
    super();
    this.title = title;
    this.description = description;
    this.date = due_date;
    this.urgent = is_urgent;
  }

  render() {
    return (
      <div className="relative flex-auto bg-slate-300">
        <strong>Title: {this.title}</strong> <br />
        <p>Description: {this.description}</p> <br />
        <p>Date: {this.date}</p>

        <input type="checkbox" name="myCheckbox" value="1" />
      </div>
    );
  }
}
