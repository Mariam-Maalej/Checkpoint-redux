import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Modaltodo({ handleEdit, newDesc, handleChangeDesc }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button className="submit" variant="dark" onClick={() => setShow(true)}>
        Edit task
      </Button>{" "}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <div className="modal-container">
          <Modal.Header closeButton >
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              placeholder="Enter new description"
              onChange={handleChangeDesc}
              value={newDesc}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button className="submit" onClick={handleEdit}>
              {" "}
              Edit
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}

export default Modaltodo;
