import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "80%",
    height: "80%",
    maxWidth: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ModalWindow = () => {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };
  const afterOpenModal = () => {};
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <div style={{ padding: "10px" }}>
      <button onClick={() => openModal()}>Open Modal!</button>
      <Modal
        isOpen={modalState}
        onAfterOpen={() => afterOpenModal()}
        // ウインドウ外を触った場合の処理
        // onRequestClose={this.closeModal}
        style={customStyles}
      >
        <div style={{ textAlign: "right" }}>
          <button onClick={() => closeModal()}>x</button>
        </div>
        <h2>ModalWindow</h2>
        <div style={{ height: "80%" }}>Opened</div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
