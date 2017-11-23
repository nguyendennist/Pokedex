import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonAbilities from 'components/pokemon-abilities/PokemonAbilities.jsx';

export default class Pokemon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showMoreInfo: 'none'
		};

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState(prevState => {
			const newState = {};

			if (prevState.showMoreInfo === 'none') {
				newState.showMoreInfo = 'inline-block';
			} else {
				newState.showMoreInfo = 'none';
			}

			return newState;
		});
	}

	render() {
		const style = {
			display: this.state.showMoreInfo
		};

		return (
			<div className='pokemon' onClick={this.onClick}>
				<div
					className='pokemon-height-and-weight'
					style={style}
				>
					<div>
						<p>Height<br/>{this.props.pokemonData.height}</p>
						<p>Weight<br/>{this.props.pokemonData.weight}</p>
					</div>
				</div>
				<div className='pokemon-image-and-name'>
					<img
						alt={`A pokemon named ${this.props.pokemonData.name}`}
						src={this.props.pokemonData.sprites.front_default}
					/>
					<p className='pokemon-text'>{this.props.pokemonData.name}</p>
				</div>
				<PokemonAbilities
					abilities={this.props.pokemonData.abilities}
					style={style}
				/>
			</div>
		);
	}
}

Pokemon.propTypes = {
	pokemonData: PropTypes.object.isRequired
};
