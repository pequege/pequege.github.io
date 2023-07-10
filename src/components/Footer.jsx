import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='bg-dark text-light container-fluid p-3'>
        <div className='d-flex justify-content-center'>
          <a target='blank' href='mailto:gerardoemansilla@gmail.com' className='link-light'>
            <i class="bi bi-envelope-at-fill m-2 fs-2"></i>
          </a>
          <a target='blank' href='https://github.com/pequege/' className='link-light'>
            <i class="bi bi-github m-2 fs-2"></i>
          </a>
          <a target='blank' href='https://www.linkedin.com/in/gerardo-mansilla-674b76a7/' className='link-light'>
            <i class="bi bi-linkedin m-2 fs-2"></i>
          </a>
        </div>
        <p className='text-center text-secondary'>2023 &copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
};

export default Footer;