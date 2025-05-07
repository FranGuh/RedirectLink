import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <button className="modal-btn" onClick={onClose}>
            X
          </button>
          {children} {/* Aquí se renderizará el contenido del modal */}
        </div>
      </div>
    </div>
  );
};

export default Modal;