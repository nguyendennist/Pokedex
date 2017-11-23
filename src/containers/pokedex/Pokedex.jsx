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

		this.fetchPokemons = this.fetchPokemons.bind(this);
		this.fetchPokemons();
	}

	fetchPokemons() {
		const offset = this.props.offset;
		let id = offset + 1;
		let start = id;
		const stop = start + 20;
		const pokemonsAreCached = offset < this.props.pokemons.length;


		if (pokemonsAreCached) {
			const cachedPokemon = this.props.pokemons.slice(offset, offset + 20);
			this.props.handleSetViewPokemonsChange(cachedPokemon);
		} else {
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
