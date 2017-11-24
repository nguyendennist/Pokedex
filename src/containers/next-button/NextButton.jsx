import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/button/Button.jsx';
import incrementOffset from 'actions/pokemon/increment-offset/increment-offset';

const NextButton = props => {
	const nextPage = () => {
		const doneLoading = props.viewPokemons.length % 20 === 0;

		if (doneLoading) {
			props.handleOffsetChange();
			setTimeout(() => props.getPokemons(), 200);
		}
	};

	return (<Button className='next-button' name='next' onClick={nextPage} />);
};

NextButton.propTypes = {
	getPokemons: PropTypes.func.isRequired,
	handleOffsetChange: PropTypes.func.isRequired,
	offset: PropTypes.number.isRequired,
	viewPokemons: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
	handleOffsetChange: () => {
		dispatch(incrementOffset(20));
	}
});

const mapStateToProps = state => ({
	offset: state.offset,
	viewPokemons: state.viewPokemons
});

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
