import React from 'react';
import classNames from 'classnames';

const Icon = ({ type, className }) => {
  return <i className={classNames(`mdi mdi-${type}`, className)} />;
};

export default Icon;
