import styled, { css } from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { IDesignProps } from '../../interfaces/IDesignProps';
import { ITypeControlProps } from '../../interfaces/ITypeControlProps';
import { IContentButtonProps } from '../../interfaces/IContentButtonProps';

export const ContainerDialog = styled.View`
	flex: 1;
	width: 100%;
	position: absolute;
	z-index: 1;
`;

export const Modal = styled.Modal``;

export const ContainerClose = styled.TouchableHighlight<IDesignProps>`
	flex: 1;
	width: 100%;
	height: 100%;
	position: absolute;
	align-items: center;
	background-color: ${(props: any) => props.theme.colors.darkTransparent};

	${({ design }: IDesignProps) => {
		if (design == 'minimal') {
			return css`
				justify-content: center;
			`;
		}
		if (design == 'default') {
			return css`
				justify-content: flex-end;
			`;
		}
	}};
`;

export const Content =
	Animatable.createAnimatableComponent<any>(styled.View<IDesignProps>`
		background-color: ${(props: any) => props.theme.colors.background};
		padding: 15px;
		max-height: 70%;
		justify-content: space-between;

		${({ design }: IDesignProps) => {
			if (design == 'minimal') {
				return css`
					width: 87%;
					border-radius: 20px;
				`;
			}
			if (design == 'default') {
				return css`
					width: 100%;
					border-top-left-radius: 11px;
					border-top-right-radius: 11px;
					padding-top: 35px;
				`;
			}
		}};
	`);

export const Scroll = styled.ScrollView`
	max-height: 73%;
`;

export const Title = styled.Text`
	color: ${(props: any) => props.theme.colors.primary};
	font-size: ${(props: any) => props.theme.fonts.size.large};
	font-weight: bold;
`;

export const Subtitle = styled.Text`
	color: ${(props: any) => props.theme.colors.primary_dark};
	font-size: ${(props: any) => props.theme.fonts.size.normal};
	margin-top: 10px;
	text-align: justify;
`;

export const ContainerButton = styled.View`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-top: 10px;
	margin-top: 35px;
	border-top-width: 0.5px;
	border-top-color: ${(props: any) => props.theme.colors.primary};
`;

export const ButtonOption = styled.TouchableOpacity<IContentButtonProps>`
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 3px;
	margin-bottom: 5px;
	margin-top: 5px;
	background-color: ${(props: any) => props.theme.colors.primary};

	${({ isCancel, design }: IContentButtonProps) => {
		// Existe a redundância pois o css não suporta a concatenação += junto com as props do ThemeProvider
		if (design == 'minimal') {
			if (isCancel) {
				return css`
					background-color: transparent;
					border-width: 2px;
					border-color: ${(props: any) => props.theme.colors.primary};
					border-radius: 50px;
				`;
			}
			return css`
				border-radius: 50px;
			`;
		}

		if (design == 'default') {
			if (isCancel) {
				return css`
					background-color: transparent;
					border-width: 2px;
					border-color: ${(props: any) => props.theme.colors.primary};
					border-radius: 11px;
				`;
			}
			return css`
				border-radius: 11px;
			`;
		}
	}};
`;

export const ButtonOptionLabel = styled.Text<ITypeControlProps>`
	font-size: ${(props: any) => props.theme.fonts.size.normal};
	color: ${(props: any) => props.theme.colors.lighter};
	margin: 5px;

	${({ isCancel }: ITypeControlProps) => {
		if (isCancel) {
			return css`
				color: ${(props: any) => props.theme.colors.primary};
			`;
		}
	}};
`;

export const FlatList = styled.FlatList`
	width: 77%;
`;

export const ContentModalHeader = styled.View`
	justify-content: center;
	align-items: center;
	align-self: center;
	height: 20px;
	width: 108%;
	padding: 8px 0;
	border-top-left-radius: 11px;
	border-top-right-radius: 11px;
	position: absolute;
	top: 0;
	background-color: ${(props: any) => props.theme.colors.transparent};
`;

export const Handle = styled.View`
	width: 13%;
	height: 4px;
	border-radius: 50px;
	background-color: ${(props: any) => props.theme.colors.light};
`;
