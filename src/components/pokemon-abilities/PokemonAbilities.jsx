import React from 'react';
import PropTypes from 'prop-types';
import PokemonAbility from 'components/pokemon-ability/PokemonAbility.jsx';

const PokemonAbilities = ({abilities, style}) => (
  <div className='pokemon-abilities' style={style}>
    <div>
      <p>{abilities.length > 1 ? 'Abilities' : 'Ability'}</p>
      {
        abilities.map(({ability}) => (
          <PokemonAbility key={ability.url} ability={ability} />
        ))
      }
    </div>
  </div>
);

PokemonAbilities.propTypes = {
  abilities: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired
};

export default PokemonAbilities;
