import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import DeleteModal from "./deleteModal/deleteModal";
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
    isOpenAddModal: false,
    isOpenDeleteModal: false,
    editTask: {},
  };

  inputOnChange = (e) => {
    const { inputValue } = this.state;
    const name = e.target.name;
    const value = e.target.value;
    if (!value) {
      delete inputValue[name];
      this.setState({
        ...this.state,
        inputValue,
      });
    } else {
      this.setState({
        ...this.state,
        inputValue: {
          ...this.state.inputValue,
          [name]: value,
        },
      });
    }
  };

  submit = (editTask) => {
    if (editTask) {
      const { tasks } = this.state;
      tasks.forEach((task) => {
        if (task.id === editTask.id) {
          task.title = editTask.title;
          task.description = editTask.description;
        }
      });
      this.setState({
        ...this.state,
        tasks,
        isOpenAddModal: false
      });
    } else {
      const { inputValue } = this.state;
      if (Object.keys(inputValue).length !== 2) return;
      const tasks = this.state.tasks;

      const obj = {};
      Object.keys(inputValue).forEach((name) => {
        console.log(inputValue[name]);
        obj[name] = inputValue[name];
        obj.id = idGeneretor();
      });

      // const isTitleDescription = Object.keys(obj).find(   Eroi hamar
      //   (i) => i === "title" || i === "description"
      // );
      if (!obj.title && !obj.description) return;
      tasks.push(obj);

      this.setState({
        ...this.state,
        inputValue: {},
        tasks,
        isOpenAddModal: false,
      });
    }
  };

  handleDeleteTask = (id) => {
    // let tasks = this.state.tasks;
    // tasks = tasks.filter((task) => task.id !== id);
    const checkedTasks = new Set();
    checkedTasks.add(id);
    this.setState({
      ...this.state,
      isOpenDeleteModal: true,
      checkedTasks,
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
      isOpenDeleteModal: false,
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

  handleOpenModal = (modalName) => {
    this.setState({
      ...this.state,
      [modalName]: true,
    });
  };
  onHide = (modalName) => {
    this.setState({
      ...this.state,
      [modalName]: false,
      checkedTasks: new Set(),
    });
  };

  handleEditTask = (task) => {
    this.setState({
      ...this.state,
      isOpenAddModal: true,
      editTask: task,
    });
  };

  resetEditTask = () => {
    this.setState({
      ...this.state,
      editTask: {},
    });
  };
  render() {
    const { inputValue, tasks, checkedTasks, isOpenDeleteModal } = this.state;
    // console.log(inputValue);
    return (
      <div>
        <h1
          style={{ textAlign: "center", color: "green", marginBottom: "50px" }}
        >
          ToDo Project
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => this.handleOpenModal("isOpenAddModal")}>
            Add Task
          </Button>
        </div>
        {this.state.isOpenAddModal && (
          <AddTask
            onHide={this.onHide}
            inputOnChange={this.inputOnChange}
            submit={this.submit}
            inputValue={inputValue}
            isOpenAddModal={this.state.isOpenAddModal}
            editTask={this.state.editTask}
            resetEditTask={this.resetEditTask}
          />
        )}
        <DeleteModal
          isOpenDeleteModal={isOpenDeleteModal}
          onHide={this.onHide}
          handleDeleteAllTasks={this.handleDeleteAllTasks}
          checkedTasks={this.state.checkedTasks}
          tasks={this.state.tasks}
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
                handleEditTask={this.handleEditTask}
              />
            );
          })}
          {tasks.length === 0 && <p>There are not tasks!</p>}
        </div>
        {tasks.length === 0 || (
          <div className={Styles.deleteAll}>
            <button
              onClick={() => this.handleOpenModal("isOpenDeleteModal")}
              disabled={checkedTasks.size === 0}
            >
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
