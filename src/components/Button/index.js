import React from 'react';
import classNames from 'classnames';

const Button = props => (
  <button
    {...props}
    className={classNames('button', props.className)}
  >
    {props.children}
  </button>
);

export default Button;
