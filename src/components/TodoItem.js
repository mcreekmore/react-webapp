import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  // try to always use arrow functions! otherwise you have to add .bind
  // to the event in the jsx
  // markComplete = e => {
  //   console.log(this.props);
  // };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)}>Delete</button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  // this is name of the class
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
