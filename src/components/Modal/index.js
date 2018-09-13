import React, { Component } from 'react';
import classNames from 'classnames';

const Modal = ({ isOpen, children, handleCloseModal }) => (
  <div className={classNames('modal', { 'is-active': isOpen })}>
    <div className="modal-background" />
    {children}
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={handleCloseModal}
    />
  </div>
);

export default Modal;
