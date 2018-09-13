import React from 'react';
import Button from '../Button';

const ModalCard = ({ children, onConfirm, handleCloseModal }) => (
  <div className="modal-card">
    <section className="modal-card-body">{children}</section>
    <footer className="modal-card-foot">
      <Button className="is-success" onClick={onConfirm}>
        Confirm
      </Button>
      <Button onClick={handleCloseModal}>Cancel</Button>
    </footer>
  </div>
);

export default ModalCard;
