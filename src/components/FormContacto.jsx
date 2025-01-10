import { Fab, Tooltip } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

export const FormContacto = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Tooltip title="Say Hello!" placement="top-end">
        <Fab
          color="secondary"
          aria-label="contact"
          className="fab-right"
          onClick={() => {
            handleShow();
          }}
        >
          <CommentIcon />
        </Fab>
      </Tooltip>
      <Modal show={show} onHide={handleClose} data-bs-theme="dark">
        <Modal.Header closeButton>
          <Modal.Title className="changa-one-regular">
            Thanks for taking the time to reach out. How can I help you today?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <Button
                className="float-right mt-3"
                variant="primary"
                onClick={handleClose}
              >
                <i className="bi bi-send-fill m-1"></i> Send
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
