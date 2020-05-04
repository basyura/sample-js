import React from "react";
import Modal from "react-modal";
import ToDoContainer from "../containers/ToDoContainer";

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
  const container = ToDoContainer.useContainer();

  const openModal = () => container.setModalState(true);
  const afterOpenModal = () => {};
  const closeModal = () => container.setModalState(false);

  if (container.modalToDo.length != 1) {
    return <></>;
  }

  console.log("modal todo: " + JSON.stringify(container.modalToDo));
  const todo = container.modalToDo[0].todo;

  return (
    <div style={{ padding: "10px" }}>
      <button onClick={() => openModal()}>Open Modal!</button>
      <Modal
        isOpen={container.modalState}
        onAfterOpen={() => afterOpenModal()}
        // ウインドウ外を触った場合の処理
        // onRequestClose={this.closeModal}
        style={customStyles}
      >
        <div style={{ textAlign: "right" }}>
          <button onClick={() => closeModal()}>x</button>
        </div>
        <h2>{todo.title}</h2>
        <hr />
        <div>{todo.description}</div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
