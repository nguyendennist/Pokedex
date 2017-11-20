import INCREMENT_OFFSET from 'constants/increment-offset';

const incrementOffset = offset => ({
	type: INCREMENT_OFFSET,
	payload: offset
})

export default incrementOffset;
