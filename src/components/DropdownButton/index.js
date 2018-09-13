import React from 'react';
import Button from '../Button';
import Icon from '../Icon';

const DropdownButton = ({ triggerDropdown, text }) => (
  <div className="dropdown-trigger">
    <Button
      aria-haspopup="true"
      aria-controls="dropdown-menu"
      onClick={triggerDropdown}
    >
      <span>{text}</span>
      <span className="icon is-small">
        <Icon type="chevron-down" aria-hidden="true" />
      </span>
    </Button>
  </div>
);

export default DropdownButton;
