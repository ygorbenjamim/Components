import styled, { css } from 'styled-components/native';

interface IContentProps {
	design?: string;
}

export const ContainerSelectInput = styled.View`
	width: 100%;
	margin: 20px 0;
	justify-content: center;
	align-items: center;
`;

export const ContentSelectInput = styled.View<IContentProps>`
	width: 88%;

	${({ design }: IContentProps) => {
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
	color: ${(props: any) => props.theme.colors.primary_dark};
	margin-top: 7px;
`;

export const Placeholder = styled.Text`
	flex: 1;
	padding: 15px 0;
	font-size: ${(props: any) => props.theme.fonts.size.normal};
	color: ${(props: any) => props.theme.colors.placeholder};
`;

export const Value = styled.Text`
	padding: 15px 4px 15px 0;
	font-size: ${(props: any) => props.theme.fonts.size.normal};
	color: ${(props: any) => props.theme.colors.darker};
`;

export const ButtonResetValue = styled.TouchableOpacity`
	flex: 1;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const Modal = styled.Modal``;

export const ContainerModal = styled.View`
	position: absolute;
	width: 92%;
	align-self: center;
	max-height: 550px;
	min-height: 550px;
	top: 107px;
	border-radius: 10px;
	background-color: ${(props: any) => props.theme.colors.background};
`;

export const FlatList = styled.FlatList``;

export const BtnCloseModal = styled.TouchableHighlight`
	flex: 1;
	width: 100%;
	height: 100%;
	background-color: ${(props: any) => props.theme.colors.darkTransparent};
`;

export const InputFilter = styled.TextInput`
	font-size: ${(props: any) => props.theme.fonts.size.normal};
	padding: 15px;
	margin-bottom: 5px;
`;

export const TextError = styled.Text`
	width: 88%;
	margin-top: 10px;
	font-size: ${(props: any) => props.theme.fonts.size.small};
	font-weight: bold;
	color: ${(props: any) => props.theme.colors.error};
	text-align: justify;
`;
