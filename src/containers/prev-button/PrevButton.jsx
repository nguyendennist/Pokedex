import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/button/Button.jsx';
import decrementOffset from 'actions/pokemon/decrement-offset/decrement-offset';

const PrevButton = props => {
	const prevPage = () => {
		if (props.pokemons.length === 20) {
			props.handleOffsetChange();
			setTimeout(() => props.fetchPokemons(), 250);
		}
	};

	return (<Button className='prev-button' name='prev' onClick={prevPage} />);
};

PrevButton.propTypes = {
	fetchPokemons: PropTypes.func.isRequired,
	handleOffsetChange: PropTypes.func.isRequired,
	pokemons: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
	handleOffsetChange: () => {
		dispatch(decrementOffset(20));
	}
});

const mapStateToProps = state => ({
	pokemons: state.pokemons
});

export default connect(mapStateToProps, mapDispatchToProps)(PrevButton);
