import React, { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import {
	ContainerButton,
	ContentButton,
	Label,
	Modal,
	ContainerModal,
} from './styles';

interface IButtonProps {
	children: ReactNode | string;
	onPress: () => void;
	disabled?: boolean;
	loading?: boolean;
	outline?: boolean;
	transparent?: boolean;
	design: 'default' | 'minimal';
}

const Button = ({
	children,
	onPress,
	disabled,
	loading,
	outline,
	transparent,
	design,
}: IButtonProps): JSX.Element => {
	const { colors } = useTheme();

	return (
		<ContainerButton>
			<ContentButton
				onPress={onPress}
				disabled={disabled || loading}
				outline={outline}
				transparent={transparent}
				design={design}>
				{loading ? (
					<ActivityIndicator size="small" color={colors.primary} />
				) : (
					<Label
						outline={outline}
						transparent={transparent}
						disabled={disabled}>
						{children}
					</Label>
				)}
			</ContentButton>

			{loading && (
				<Modal visible={loading} animationType="fade" transparent>
					<ContainerModal></ContainerModal>
				</Modal>
			)}
		</ContainerButton>
	);
};

export default Button;
