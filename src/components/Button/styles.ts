import styled, { css } from 'styled-components/native';

interface IOutlineProps {
	enabled?: boolean;
	outline?: boolean;
	transparent?: boolean;
}

interface IContainerButtonProps extends IOutlineProps {
	design?: string;
}

export const ContainerButton = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const ContentButton = styled.TouchableOpacity`
	width: 88%;
	min-height: 58px;
	padding: 15px;
	margin: 20px 0;
	justify-content: center;
	align-items: center;
	border-radius: 11px;
	background-color: ${(props: any) => props.theme.colors.primary};
	border-color: ${(props: any) => props.theme.colors.primary};

	${({ outline, transparent, design, enabled }: IContainerButtonProps) => {
		var cssResult: string = '';
		if (!enabled) {
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

export const Label = styled.Text<IOutlineProps>`
	font-size: ${(props: any) => props.theme.fonts.size.normal};
	color: ${(props: any) => props.theme.colors.lighter};

	${({ outline, transparent, enabled }: IOutlineProps) => {
		if (outline || transparent) {
			if (!enabled) {
				return css`
					color: #999;
				`;
			}
			return css`
				color: ${(props: any) => props.theme.colors.primary};
			`;
		}
		if (!enabled) {
			return css`
				color: #999;
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
