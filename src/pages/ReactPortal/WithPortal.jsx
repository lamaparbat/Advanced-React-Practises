import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

const WithPortal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div id="model-container">
        <button onClick={() => setOpenModal(!openModal)}>
          Open Modal With Portal
        </button>
        {openModal &&
          createPortal(
            <Modal handleClose={handleClose} />,
            document.getElementById("modal-renderer")
          )}
      </div>
    </>
  );
};

export default WithPortal;
