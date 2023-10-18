import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Deletemodal({ isOpenDeleteModal, onHide, handleDeleteAllTasks }) {
  return (
    <Modal show={isOpenDeleteModal} onHide={() => onHide("isOpenDeleteModal")}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide("isOpenDeleteModal")}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDeleteAllTasks}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Deletemodal;
