import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
	background-color: transparent;
`;

export const Description = styled.Text`
	margin-top: 8px;
	font-size: ${(props: any) => props.theme.fonts.size.normal};
	color: ${(props: any) => props.theme.colors.placeholder};
	text-align: center;
`;
