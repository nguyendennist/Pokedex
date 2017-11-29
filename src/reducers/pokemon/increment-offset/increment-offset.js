const incrementOffset = (state, action) => ({
  ...state,
  offset: state.offset + action.payload
});

export default incrementOffset;
