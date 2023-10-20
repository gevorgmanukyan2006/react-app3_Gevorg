import Styles from "./styles.module.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class AddTask extends React.Component {
  state = {
    title: this.props.editTask.title,
    description: this.props.editTask.description,
    id: this.props.editTask.id,
  };

  editInputChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { isOpenAddModal, editTask, inputOnChange, onHide, submit } =
      this.props;
    const isAddState = Object.keys(editTask).length === 0;
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
                value={this.state.title}
                placeholder="Title"
                autoFocus
                onChange={isAddState ? inputOnChange : this.editInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={this.state.description}
                as="textarea"
                rows={3}
                name="description"
                onChange={isAddState ? inputOnChange : this.editInputChange}
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
            onClick={() => submit(!isAddState ? this.state : undefined)}
          >
            {isAddState ? "Add Task" : "Edit Task"}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  componentWillUnmount() {
    this.props.resetEditTask();
  }
}

export default AddTask;
