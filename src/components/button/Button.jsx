import React from 'react';
import PropTypes from 'prop-types';

const Button = ({className, name, onClick}) => (
  <div className={className} onClick={onClick}>
    <p>{name}</p>
  </div>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
