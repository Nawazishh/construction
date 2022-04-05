import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImageOverlay = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onMouseOver={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ backgroundColor: "transparent" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upmost attention to detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            alt="Maintaining Professionlaism "
            class=""
            src="https://www.4siteconstruction.co.uk/wp-content/uploads/2020/11/Independent.svg"
            style={{ width: "100%", height: "8rem", textAlign: "center" }}
            className="img-fluid"
          />
          Practicality, safety, longevity and aesthetics are never overlooked by
          our professional team.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageOverlay;
