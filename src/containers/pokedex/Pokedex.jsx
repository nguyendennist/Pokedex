import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addViewPokemon from 'actions/pokemon/add-view-pokemon/add-view-pokemon';
import cachePokemon from 'actions/pokemon/cache-pokemon/cache-pokemon';
import NextButton from 'containers/next-button/NextButton.jsx';
import PokemonList from 'containers/pokemon-list/PokemonList.jsx';
import PrevButton from 'containers/prev-button/PrevButton.jsx';
import setViewPokemons from 'actions/pokemon/set-view-pokemons/set-view-pokemons';

class Pokedex extends Component {
	constructor(props) {
		super(props);

		this.getPokemons = this.getPokemons.bind(this);
		this.getPokemons();
	}

	fetchAndCachePokemons(offset) {
		let id = offset + 1;
		let start = id;
		const stop = start + 20;

		this.props.handleSetViewPokemonsChange([]);

		while (start < stop) {
			(id => {
				const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

				fetch(url, {
					method: 'GET'
				}).then(response => {
					response.json().then(pokemonData => {
						this.props.handleAddViewPokemonChange(pokemonData);
						this.props.handleCachePokemonChange(pokemonData);
					});
				});

			})(id);

			id++;
			start++;
		}
	}

	getCachedPokemons(offset) {
		const cachedPokemons = this.props.pokemons.slice(offset, offset + 20);
		this.props.handleSetViewPokemonsChange(cachedPokemons);
	}

	getPokemons() {
		const offset = this.props.offset;
		const pokemonsAreCached = offset < this.props.pokemons.length;

		if (pokemonsAreCached) {
			this.getCachedPokemons(offset);
		} else {
			this.fetchAndCachePokemons(offset);
		}
	}

	render() {
		return (
			<div>
				<div className='buttons'>
					<PrevButton getPokemons={this.getPokemons} />
					<NextButton getPokemons={this.getPokemons} />
				</div>
				<PokemonList />
			</div>
		);
	}
}

Pokedex.propTypes = {
	handleAddViewPokemonChange: PropTypes.func.isRequired,
	handleCachePokemonChange: PropTypes.func.isRequired,
	handleSetViewPokemonsChange: PropTypes.func.isRequired,
	offset: PropTypes.number.isRequired,
	pokemons: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
	handleAddViewPokemonChange: pokemon => {
		dispatch(addViewPokemon(pokemon));
	},
	handleCachePokemonChange: pokemon => {
		dispatch(cachePokemon(pokemon));
	},
	handleSetViewPokemonsChange: pokemon => {
		dispatch(setViewPokemons(pokemon));
	}
});

const mapStateToProps = state => ({
	offset: state.offset,
	pokemons: state.pokemons
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
