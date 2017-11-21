import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/button/Button.jsx';
import incrementOffset from 'actions/pokemon/increment-offset/increment-offset';

const NextButton = ({handleOffsetChange}) => (
	<Button name='next' onClick={handleOffsetChange} />
);

NextButton.propTypes = {
	handleOffsetChange: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
	handleOffsetChange: () => {
		dispatch(incrementOffset(20));
	}
});

const mapStateToProps = undefined;

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
