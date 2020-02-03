import React, { Component } from "react";

class TodoList extends Component {
  state = {
    input: "",
    todos: [
      
    ]
  };

  handleSubmit = e => {
    e.preventDefault();

    // copy todo list
    const editedTodos = [...this.state.todos];
    if (this.state.input.trim() !== "") {
      editedTodos.push({ content: this.state.input });

      this.setState({
        todos: editedTodos,
        input: ""
      });
    }

    // add a new todo to the list
    // editedTodos.push({ content: ?? });

    // save the updated list and reset `input`
    // this.setState({
    //   ??
    // });
  };

  onChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleDelete = (index) => {
    const editedTodos = [...this.state.todos];
    editedTodos.splice(index, 1);
    this.setState({
      todos:editedTodos
    })

  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          ></input>
          <button>save todo</button>
        </form>
        <ul>
          {this.state.todos.map((item, index) => (
            <li key={index}>
              {item.content}
              <span className="delete-container">
                <button onClick={() => {this.handleDelete(index)}} className="delete">x</button>
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
