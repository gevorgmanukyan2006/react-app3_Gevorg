import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import Styles from "./styles.module.css";
import { idGeneretor } from "../helpers/idGeneretor";

class ToDo extends React.Component {
  state = {
    tasks: [
      { name: "Task1", id: idGeneretor() },
      { name: "Task2", id: idGeneretor() },
      { name: "Task3", id: idGeneretor() },
    ],
    inputValue: "",
  };

  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  };

  submit = () => {
    if (this.state.inputValue === "") return;
    const tasks = this.state.tasks;
    tasks.push({ name: this.state.inputValue, id: idGeneretor() });
    // this.state.tasks = tasks;  sxal tarberak
    this.setState({
      ...this.state,
      inputValue: "",
      tasks,
    });
  };

  handleDeleteTask = (id) => {
    let tasks = this.state.tasks;
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      ...this.state,
      tasks,
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "green" }}>ToDo Project</h1>
        <AddTask
          onChange={this.onChange}
          submit={this.submit}
          inputValue={this.state.inputValue}
        />
        <div className={Styles.TasksContainer}>
          {this.state.tasks.map((item, index) => {
            return (
              <Task
                key={index}
                task={item}
                handleDeleteTask={this.handleDeleteTask}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ToDo;
