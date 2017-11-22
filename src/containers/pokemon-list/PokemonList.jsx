import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addPokemon from 'actions/pokemon/add-pokemon/add-pokemon';
import Pokemon from 'components/pokemon/Pokemon.jsx';
import setPokemons from 'actions/pokemon/set-pokemons/set-pokemons';

class PokemonList extends Component {
	constructor(props) {
		super(props);
	}

	// fetchPokemons() {
	// 	let id = this.props.offset + 1;
	// 	let start = id;
	// 	const stop = start + 20;
	//
	// 	this.props.handleSetPokemonsChange([]);
	//
	// 	while (start < stop) {
	// 		(id => {
	// 			const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	// 			fetch(url, {
	// 				method: 'GET'
	// 			}).then(response => {
	// 				response.json().then(pokemonData => {
	// 					this.props.handleAddPokemonChange(pokemonData);
	// 				});
	// 			});
	// 		})(id);
	//
	// 		id++;
	// 		start++;
	// 	}
	// }

	render() {
		return (
			<div>
				{
					this.props.pokemons.map((pokemonData, index) => (
						<Pokemon key={index} pokemonData={this.props.pokemons[index]} />
					))
				}
			</div>
		);
	}
}

PokemonList.propTypes = {
	handleAddPokemonChange: PropTypes.func.isRequired,
	handleSetPokemonsChange: PropTypes.func.isRequired,
	offset: PropTypes.number.isRequired,
	pokemons: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
	handleAddPokemonChange: pokemon => {
		dispatch(addPokemon(pokemon));
	},
	handleSetPokemonsChange: pokemon => {
		dispatch(setPokemons(pokemon));
	}
});

const mapStateToProps = state => ({
	offset: state.offset,
	pokemons: state.pokemons
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
