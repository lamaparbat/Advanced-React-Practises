import "./index.css";

const Modal = ({ handleClose }) => {
  return (
    <div className="model">
      <h1>Open Modal Without Portal</h1>
      <button onClick={handleClose}>Close Modal</button>
    </div>
  );
};

export default Modal;
