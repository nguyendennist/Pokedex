import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/button/Button.jsx';
import decrementOffset from 'actions/pokemon/decrement-offset/decrement-offset';

const PrevButton = ({handleOffsetChange}) => (
	<Button name='prev' onClick={handleOffsetChange} />
);

PrevButton.propTypes = {
	handleOffsetChange: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
	handleOffsetChange: () => {
		dispatch(decrementOffset(20));
	}
});

const mapStateToProps = undefined;

export default connect(mapStateToProps, mapDispatchToProps)(PrevButton);
