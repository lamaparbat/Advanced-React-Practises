import { useState } from "react";
import Modal from "./Modal";

const WithoutPortal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div id="model-container">
        <button onClick={() => setOpenModal(!openModal)}>
          Open Modal Without Portal
        </button>
        {openModal && <Modal handleClose={handleClose} />}
      </div>
    </>
  );
};

export default WithoutPortal;
