import styled, { css } from 'styled-components/native';
import TextInputMaskRN from 'react-native-text-input-mask';
import { IDesignProps } from '../../interfaces/IDesignProps';

export const ContainerInput = styled.View`
	width: 100%;
	margin: 20px 0;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.View<IDesignProps>`
	width: 88%;

	${({ design }: IDesignProps) => {
		if (design == 'minimal') {
			return css`
				border-bottom-width: 1px;
				border-bottom-color: ${(props: any) =>
					props.theme.colors.primary};
			`;
		}
		if (design == 'default') {
			return css`
				border-radius: 11px;
				background-color: ${(props: any) => props.theme.colors.lighter};
				padding: 0 15px;
			`;
		}
	}}
`;

export const ContentRow = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const ButtonShow = styled.TouchableOpacity`
	border-radius: 13px;
`;

export const Label = styled.Text`
	font-size: ${(props: any) => props.theme.fonts.size.small};
	font-weight: bold;
	color: ${(props: any) => props.theme.colors.primary};
	margin-top: 7px;
`;

export const TextInput = styled(TextInputMaskRN)`
	flex: 1;
	padding: 15px 0;
	font-size: ${(props: any) => props.theme.fonts.size.normal};
	color: #112345;
`;

export const TextError = styled.Text`
	width: 88%;
	margin-top: 10px;
	font-size: ${(props: any) => props.theme.fonts.size.small};
	font-weight: bold;
	color: ${(props: any) => props.theme.colors.error};
	text-align: justify;
`;
