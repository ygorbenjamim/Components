import styled, { css } from 'styled-components/native';
import { IContentButtonProps } from '../../interfaces/IContentButtonProps';
import { ITypeControlProps } from '../../interfaces/ITypeControlProps';

export const ContainerButton = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const ContentButton = styled.TouchableOpacity<IContentButtonProps>`
	width: 88%;
	min-height: 58px;
	padding: 15px;
	margin: 20px 0;
	justify-content: center;
	align-items: center;
	border-radius: 11px;
	background-color: ${(props: any) => props.theme.colors.primary};
	border-color: ${(props: any) => props.theme.colors.primary};

	${({ design, disabled, outline, transparent }: IContentButtonProps) => {
		var cssResult: string = '';
		if (disabled) {
			cssResult += `
				background-color: #444849;
				border-color: #444849;
      		`;
		}
		if (outline) {
			cssResult += `
				background-color: transparent;
				border-width: 1.5px;
			`;
		}
		if (transparent) {
			cssResult += `
				background-color: transparent;
			`;
		}
		if (design == 'minimal') {
			cssResult += `
				border-radius: 50px;
			`;
		}
		if (design == 'default') {
			cssResult += `
				border-radius: 11px;
			`;
		}
		return css`
			${cssResult}
		`;
	}};
`;

export const Label = styled.Text<ITypeControlProps>`
	font-size: ${(props: any) => props.theme.fonts.size.normal};
	color: ${(props: any) => props.theme.colors.lighter};

	${({ disabled, outline, transparent }: ITypeControlProps) => {
		if (disabled) {
			return css`
				color: #999;
			`;
		}
		if (outline || transparent) {
			return css`
				color: ${(props: any) => props.theme.colors.primary};
			`;
		}
	}};
`;

export const Modal = styled.Modal`
	width: 100%;
`;

export const ContainerModal = styled.View`
	flex: 1;
	width: 100%;
	background-color: ${(props: any) => props.theme.colors.transparent};
`;
