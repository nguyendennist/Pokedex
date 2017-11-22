import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({pokemonData}) => (
	<div className='pokemon'>
		<img
			alt={`A pokemon named ${pokemonData.name}`}
			src={pokemonData.sprites.front_default}
		/>
		<p className='pokemon-text'>{pokemonData.name}</p>
	</div>
);

Pokemon.propTypes = {
	pokemonData: PropTypes.object.isRequired
};

export default Pokemon;
