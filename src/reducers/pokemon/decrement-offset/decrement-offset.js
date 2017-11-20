const decrementOffset = (state, action) => ({
	...state,
	offset: state.offset - action.payload
})

export default decrementOffset;
