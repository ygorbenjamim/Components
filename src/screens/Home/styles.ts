import styled from 'styled-components/native';

export const ContainerHome = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${(props: any) => props.theme.colors.background};
`;

export const Scroll = styled.ScrollView`
	flex: 1;
	width: 100%;
	background-color: ${(props: any) => props.theme.colors.background};
`;

export const Title = styled.Text`
	font-size: 18px;
	font-weight: bold;
	width: 100%;
	text-align: left;
	padding: 30px 20px;
	color: ${(props: any) => props.theme.colors.primary};

	background-color: ${(props: any) => props.theme.colors.primary_dark};
`;

export const ButtonDesign = styled.TouchableOpacity`
	position: static;
	justify-content: center;
	align-items: center;
	padding: 12px;
	margin: 10px;
	border-radius: 13px;
	background-color: ${(props: any) => props.theme.colors.primary_light};
`;

export const LabelDesign = styled.Text`
	font-size: 16px;
	color: ${(props: any) => props.theme.colors.primary_dark};
`;
