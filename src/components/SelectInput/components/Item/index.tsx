import React from 'react';
import { IPicker } from '../../../../interfaces/IPicker';
import { Container, Text } from './styles';

interface IItemProps {
	value: IPicker;
	onPress: () => void;
}

const Item = ({ value, onPress }: IItemProps): JSX.Element => {
	return (
		<Container onPress={onPress}>
			<Text>{value.label}</Text>
		</Container>
	);
};

export default Item;
