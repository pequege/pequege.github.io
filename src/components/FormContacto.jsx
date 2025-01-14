import { Fab, Tooltip } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { Button, Form, Modal } from "react-bootstrap";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

export const FormContacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (consulta, e) => {
    console.log(consulta);
    sendEmail(e);
  };

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Consulta Enviada", "Su consulta se envio!!", "success");
          reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire(
            "Consulta NO Enviada",
            "Su consulta no se envio!!",
            "error"
          );
        }
      );
  };
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
          <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                {...register("user_name", {
                  required: "El nombre es un dato obligatorio",
                  minLength: {
                    value: 2,
                    message: "La cantidad mínima de caracteres es de 2 digitos",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "La cantidad mínima de caracteres es de 30 digitos",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="user_email"
                {...register("user_email", {
                  required: "El e-mail es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El email debe tener el siguiente formato mail@dominio.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="user_message"
                {...register("user_message", {
                  required: "La consulta es un dato obligatorio",
                  minLength: {
                    value: 5,
                    message: "La cantidad mínima de caracteres es de 5 digitos",
                  },
                  maxLength: {
                    value: 500,
                    message:
                      "La cantidad máxima de caracteres es de 500 digitos",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.user_message?.message}
              </Form.Text>
            </Form.Group>
            <Button
              className="float-right mt-3"
              variant="primary"
              type="submit"
              onClick={sendEmail}
            >
              <i className="bi bi-send-fill m-1"></i> Send
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
