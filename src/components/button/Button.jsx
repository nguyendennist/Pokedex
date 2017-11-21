import React from 'react';
import PropTypes from 'prop-types';

const Button = ({name, onClick}) => (
	<input type='button' value={name} onClick={onClick} />
);

Button.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Button;
