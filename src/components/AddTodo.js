import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  // as long as e.target."name" is the same as the actual name  it will work
  onType = e => this.setState({ [e.target.name]: e.target.value }); // this is whatever you're typing in

  onSubmit = e => {
    e.preventDefault(); // same as vue!

    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onType}
        ></input>
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        ></input>
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  // this is name of the class
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
