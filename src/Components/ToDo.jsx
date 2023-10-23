import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import DeleteModal from "./deleteModal/deleteModal";
import Styles from "./styles.module.css";
import { idGeneretor } from "../helpers/idGeneretor";
import Button from "react-bootstrap/Button";

const ToDo = () => {
  let [tasks, setTasks] = useState([
    { title: "Task1", description: "description", id: idGeneretor() },
    { title: "Task2", description: "description", id: idGeneretor() },
    { title: "Task3", description: "description", id: idGeneretor() },
  ]);
  let [inputValue, setInputValue] = useState({});
  let [checkedTasks, setCheckedTasks] = useState(new Set());
  let [isOpenAddModal, setIsOpenAddModal] = useState(false);
  let [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  let [editTask, setEditTask] = useState({});

  const inputOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (!value) {
      delete inputValue[name];
      setInputValue(inputValue);
    } else {
      setInputValue({
        ...inputValue,
        [name]: value,
      });
    }
  };

  const submit = (editTask) => {
    if (editTask) {
      tasks.forEach((task) => {
        if (task.id === editTask.id) {
          task.title = editTask.title;
          task.description = editTask.description;
        }
      });
      setTasks(tasks);
      setIsOpenAddModal(false);
    } else {
      if (Object.keys(inputValue).length !== 2) return;
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
      setInputValue({});
      setTasks(tasks);
      setIsOpenAddModal(false);
    }
  };

  const handleDeleteTask = (id) => {
    // let tasks = this.state.tasks;
    // tasks = tasks.filter((task) => task.id !== id);
    const checkedTasks = new Set();
    checkedTasks.add(id);
    setCheckedTasks(checkedTasks);
    setIsOpenDeleteModal(true);
  };

  const handleOnChange = (id) => {
    if (checkedTasks.has(id)) {
      checkedTasks.delete(id);
    } else {
      checkedTasks.add(id);
    }
    setCheckedTasks(new Set(checkedTasks));
  };
  const handleDeleteAllTasks = () => {
    // tasks = tasks.filter((task) => task.id !== checkedTasks.has(task.id));
    checkedTasks = Array.from(checkedTasks);
    tasks = checkedTasks.reduce(
      (acc, checkedTask) => acc.filter((task) => task.id !== checkedTask),
      tasks
    );
    setTasks(tasks);
    setCheckedTasks(new Set());
    setIsOpenDeleteModal(false);
  };

  const handleCheckAllTasks = () => {
    if (checkedTasks.size === tasks.length) {
      checkedTasks.clear();
    } else {
      checkedTasks = tasks.map((item) => item.id);
    }
    setCheckedTasks(new Set(checkedTasks));
  };

  const handleOpenModal = (modalName) => {
    if (modalName === "isOpenAddModal") {
      setIsOpenAddModal(true);
    } else {
      setIsOpenDeleteModal(true);
    }
  };
  const onHide = (modalName) => {
    if (modalName === "isOpenAddModal") {
      setIsOpenAddModal(false);
    } else {
      setIsOpenDeleteModal(false);
    }
    setCheckedTasks(new Set());
  };

  const handleEditTask = (task) => {
    setEditTask(task);
    setIsOpenAddModal(true);
  };

  const resetEditTask = () => {
    setEditTask({});
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "green", marginBottom: "50px" }}>
        ToDo Project
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => handleOpenModal("isOpenAddModal")}>
          Add Task
        </Button>
      </div>
      {isOpenAddModal && (
        <AddTask
          onHide={onHide}
          inputOnChange={inputOnChange}
          submit={submit}
          inputValue={inputValue}
          isOpenAddModal={isOpenAddModal}
          editableTask={editTask}
          resetEditTask={resetEditTask}
        />
      )}
      <DeleteModal
        isOpenDeleteModal={isOpenDeleteModal}
        onHide={onHide}
        handleDeleteAllTasks={handleDeleteAllTasks}
        checkedTasks={checkedTasks}
        tasks={tasks}
      />
      <div className={Styles.TasksContainer}>
        {tasks.map((item, index) => {
          return (
            <Task
              key={index}
              task={item}
              handleDeleteTask={handleDeleteTask}
              handleOnChange={handleOnChange}
              checkedTasks={checkedTasks}
              handleEditTask={handleEditTask}
            />
          );
        })}
        {tasks.length === 0 && <p>There are not tasks!</p>}
      </div>
      {tasks.length === 0 || (
        <div className={Styles.deleteAll}>
          <button
            onClick={() => handleOpenModal("isOpenDeleteModal")}
            disabled={checkedTasks.size === 0}
          >
            Delete Cheked tasks
          </button>
          <button onClick={handleCheckAllTasks} style={{ background: "green" }}>
            {checkedTasks.size === tasks.length ? "Uncheck All" : "Check All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ToDo;
