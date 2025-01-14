import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, {
        publicKey: process.env.PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Consulta Enviada", "Su consulta se envio!!", "success");
          reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire("Consulta NO Enviada", "Su consulta no se envio!!", "error");
        }
      );
  };
};
