import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/button/Button.jsx';
import decrementOffset from 'actions/pokemon/decrement-offset/decrement-offset';

const PrevButton = props => {
  const prevPage = () => {
    const doneLoading = props.viewPokemons.length % 20 === 0;

    if (doneLoading) {
      props.handleOffsetChange();
      setTimeout(() => props.getPokemons(), 200);
    }
  };

  return (<Button className='prev-button' name='prev' onClick={prevPage} />);
};

PrevButton.propTypes = {
  getPokemons: PropTypes.func.isRequired,
  handleOffsetChange: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  viewPokemons: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleOffsetChange: () => {
    dispatch(decrementOffset(20));
  }
});

const mapStateToProps = state => ({
  offset: state.offset,
  viewPokemons: state.viewPokemons
});

export default connect(mapStateToProps, mapDispatchToProps)(PrevButton);
