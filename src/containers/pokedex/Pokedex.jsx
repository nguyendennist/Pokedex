import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addPokemon from 'actions/pokemon/add-pokemon/add-pokemon';
import NextButton from 'containers/next-button/NextButton.jsx';
import PokemonList from 'containers/pokemon-list/PokemonList.jsx';
import PrevButton from 'containers/prev-button/PrevButton.jsx';
import setPokemons from 'actions/pokemon/set-pokemons/set-pokemons';

class Pokedex extends Component {
	constructor(props) {
		super(props);

		this.fetchPokemons = this.fetchPokemons.bind(this);
		this.fetchPokemons();
	}

	fetchPokemons() {
		const offset = this.props.offset;
		let id = offset + 1;
		let start = id;
		const stop = start + 20;
		this.props.handleSetPokemonsChange([]);

		while (start < stop) {
			(id => {
				const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
				fetch(url, {
					method: 'GET'
				}).then(response => {
					response.json().then(pokemonData => {
						if (pokemonData.id > offset) {
							this.props.handleAddPokemonChange(pokemonData);
						}
					});
				});
			})(id);

			id++;
			start++;
		}
	}

	render() {
		return (
			<div>
				<div className='buttons'>
					<PrevButton fetchPokemons={this.fetchPokemons} />
					<NextButton fetchPokemons={this.fetchPokemons} />
				</div>
				<PokemonList />
			</div>
		);
	}
}

Pokedex.propTypes = {
	handleAddPokemonChange: PropTypes.func.isRequired,
	handleSetPokemonsChange: PropTypes.func.isRequired,
	offset: PropTypes.number.isRequired
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
	offset: state.offset
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
