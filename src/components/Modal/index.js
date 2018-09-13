import React, { Component } from 'react';
import classNames from 'classnames';

class Modal extends Component {
  render() {
    return (
      <div className={classNames('modal', { 'is-active': this.props.isOpen })}>
        <div className="modal-background" />
        {this.props.children}
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={this.props.handleCloseModal}
        />
      </div>
    );
  }
}

export default Modal;
