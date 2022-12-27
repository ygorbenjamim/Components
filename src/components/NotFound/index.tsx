import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components';
import { Container, Description } from './styles';

interface INotFoundProps {
	description?: string;
}

const NotFound = ({ description }: INotFoundProps): JSX.Element => {
	const { colors } = useTheme();

	return (
		<Container>
			<Icon name="cloud-search" size={55} color={colors.placeholder} />
			<Description>{description}</Description>
		</Container>
	);
};

export default NotFound;
