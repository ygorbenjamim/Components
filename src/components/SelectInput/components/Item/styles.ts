import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 15px;
  margin: 0 10px 5px 10px;
  border-radius: 50px;
  background-color: ${(props: any) => props.theme.colors.lighter};
`;

export const Text = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.size.normal};
  color: ${(props: any) => props.theme.colors.text_black};
`;
