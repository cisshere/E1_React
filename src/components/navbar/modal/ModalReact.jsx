import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const EjemploModalReact = ({ modalIsOpen, closeModal }) => {
  return (

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Hello</h2>
      <button onClick={closeModal}>Cerrar</button>
    </Modal>
  );
};

export default EjemploModalReact;

/* ReactDOM.render(<EjemploModalReact />, appElement); */
