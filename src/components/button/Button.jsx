import React from 'react';
import PropTypes from 'prop-types';

const Button = ({name}) => (
	<input type='button' value={name} />
);

Button.propTypes = {
	name: PropTypes.string.isRequired
};

export default Button;
