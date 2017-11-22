import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/button/Button.jsx';
import incrementOffset from 'actions/pokemon/increment-offset/increment-offset';

const NextButton = props => {
	const nextPage = () => {
		if (props.pokemons.length === 20) {
			props.handleOffsetChange();
			setTimeout(() => props.fetchPokemons(), 250);
		}
	};

	return (<Button className='next-button' name='next' onClick={nextPage} />);
};

NextButton.propTypes = {
	fetchPokemons: PropTypes.func.isRequired,
	handleOffsetChange: PropTypes.func.isRequired,
	pokemons: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
	handleOffsetChange: () => {
		dispatch(incrementOffset(20));
	}
});

const mapStateToProps = state => ({
	pokemons: state.pokemons
});

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
