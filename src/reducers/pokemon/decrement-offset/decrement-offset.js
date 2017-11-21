const decrementOffset = (state, action) => {
	let result = {
		...state,
		offset: state.offset
	};

	if (state.offset > 0) {
		result.offset -= action.payload;
	}

	return result;
};

export default decrementOffset;
