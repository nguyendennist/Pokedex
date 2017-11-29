import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pokemon from 'components/pokemon/Pokemon.jsx';

const PokemonList = props => (
  <div>
    {
      props.viewPokemons.map((pokemonData, index) => (
        <Pokemon key={index} pokemonData={props.viewPokemons[index]} />
      ))
    }
  </div>
);

PokemonList.propTypes = {
  viewPokemons: PropTypes.array.isRequired
};

const mapDispatchToProps = undefined;

const mapStateToProps = state => ({
  viewPokemons: state.viewPokemons
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
