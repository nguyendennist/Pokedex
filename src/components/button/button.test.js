import React from 'react';
import { create } from 'react-test-renderer';
import Button from './Button.jsx';

it('renders correctly', () => {
	const tree = create(
		<Button name='test' />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
