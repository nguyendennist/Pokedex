import React from 'react';
import { create } from 'react-test-renderer';
import NextButton from './NextButton.jsx';

it('renders correctly', () => {
	const tree = create(
		<NextButton />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
