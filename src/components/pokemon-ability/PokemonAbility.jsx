import React from 'react';
import PropTypes from 'prop-types';

const PokemonAbility = ({ability}) => (
	<p>{ability.name}</p>
);

PokemonAbility.propTypes = {
	ability: PropTypes.object.isRequired
};

export default PokemonAbility;
