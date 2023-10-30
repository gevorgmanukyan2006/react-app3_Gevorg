import Styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AddTask = ({
  isOpenAddModal,
  editableTask,
  inputOnChange,
  onHide,
  submit,
  resetEditTask,
}) => {
  let [editTask, setEditTask] = useState({
    title: editableTask.title,
    description: editableTask.description,
    id: editableTask.id,
  });

  const editInputChange = (e) => {
    setEditTask({
      ...editTask,
      [e.target.name]: e.target.value,
    });
  };

 
  const isAddState = Object.keys(editableTask).length === 0;
  return (
    <Modal
      show={isOpenAddModal}
      onHide={() => onHide("isOpenAddModal")}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title>{isAddState ? "Add Task" : "Edit Task"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={editTask.title}
              placeholder="Title"
              autoFocus
              onChange={isAddState ? inputOnChange : editInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={editTask.description}
              as="textarea"
              rows={3}
              name="description"
              onChange={isAddState ? inputOnChange : editInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide("isOpenAddModal")}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => submit(!isAddState ? editTask : undefined)}
        >
          {isAddState ? "Add Task" : "Edit Task"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddTask;
