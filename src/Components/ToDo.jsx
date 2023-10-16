import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import Styles from "./styles.module.css";
import { idGeneretor } from "../helpers/idGeneretor";
import Button from "react-bootstrap/Button";

class ToDo extends React.Component {
  state = {
    tasks: [
      { title: "Task1", description: "description", id: idGeneretor() },
      { title: "Task2", description: "description", id: idGeneretor() },
      { title: "Task3", description: "description", id: idGeneretor() },
    ],
    inputValue: {},
    checkedTasks: new Set(),
    isOpenModal: false,
  };

  inputOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      ...this.state,
      inputValue: {
        ...this.state.inputValue,
        [name]: value,
      },
    });
  };

  submit = () => {
    const { inputValue } = this.state;
    // console.log(inputValue, "inputValue");

    // if (inputValue.value === "") return;
    const tasks = this.state.tasks;

    const obj = {};

    const isEmpty = Object.keys(inputValue).some((name) => {
      console.log(inputValue[name]);
      if (inputValue[name] === "") return false;
      console.log(name, "name");
      obj[name] = inputValue[name];
      obj.id = idGeneretor();
      return true;
    });

    if (!isEmpty) return;
    console.log(isEmpty);
    tasks.push(obj);

    this.setState({
      ...this.state,
      inputValue: {},
      tasks,
      isOpenModal: false,
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

  handleOnChange = (id) => {
    const { checkedTasks } = this.state;
    if (checkedTasks.has(id)) {
      checkedTasks.delete(id);
    } else {
      checkedTasks.add(id);
    }
    this.setState({
      ...this.state,
      checkedTasks,
    });
  };
  handleDeleteAllTasks = () => {
    let { tasks, checkedTasks } = this.state;
    // tasks = tasks.filter((task) => task.id !== checkedTasks.has(task.id));
    checkedTasks = Array.from(checkedTasks);
    tasks = checkedTasks.reduce(
      (acc, checkedTask) => acc.filter((task) => task.id !== checkedTask),
      tasks
    );

    this.setState({
      ...this.state,
      tasks,
      checkedTasks: new Set(),
    });
  };
  handleCheckAllTasks = () => {
    let { tasks, checkedTasks } = this.state;
    if (checkedTasks.size === tasks.length) {
      checkedTasks.clear();
    } else {
      checkedTasks = tasks.map((item) => item.id);
    }

    this.setState({
      ...this.state,
      checkedTasks: new Set(checkedTasks),
    });
  };

  handleOpenModal = () => {
    this.setState({
      ...this.state,
      isOpenModal: true,
    });
  };
  onHide = () => {
    this.setState({
      ...this.state,
      isOpenModal: false,
    });
  };
  render() {
    const { inputValue, tasks, checkedTasks } = this.state;
    console.log(this.state.inputValue);
    return (
      <div>
        <h1
          style={{ textAlign: "center", color: "green", marginBottom: "50px" }}
        >
          ToDo Project
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={this.handleOpenModal}>Add Task</Button>
        </div>
        <AddTask
          onHide={this.onHide}
          inputOnChange={this.inputOnChange}
          submit={this.submit}
          inputValue={inputValue}
          isOpenModal={this.state.isOpenModal}
        />
        <div className={Styles.TasksContainer}>
          {tasks.map((item, index) => {
            return (
              <Task
                key={index}
                task={item}
                handleDeleteTask={this.handleDeleteTask}
                handleOnChange={this.handleOnChange}
                checkedTasks={checkedTasks}
              />
            );
          })}
          {tasks.length === 0 && <p>There are not tasks!</p>}
        </div>
        {tasks.length === 0 || (
          <div className={Styles.deleteAll}>
            <button onClick={this.handleDeleteAllTasks}>
              Delete Cheked tasks
            </button>
            <button
              onClick={this.handleCheckAllTasks}
              style={{ background: "green" }}
            >
              {checkedTasks.size === tasks.length ? "Uncheck All" : "Check All"}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ToDo;
