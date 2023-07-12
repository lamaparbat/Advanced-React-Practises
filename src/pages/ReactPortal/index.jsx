import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

const ReactPortal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div id="model-container">
      <button onClick={() => setOpenModal(!openModal)}>Open Modal</button>
      {openModal &&
        createPortal(<Modal />, document.getElementById("model-container"))}
    </div>
  );
};

export default ReactPortal;
