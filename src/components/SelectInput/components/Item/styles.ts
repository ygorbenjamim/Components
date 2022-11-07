import styled from 'styled-components/native';
import { useTheme } from 'styled-components';
const { colors } = useTheme();

export const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 15px;
  margin: 0 10px 5px 10px;
  border-radius: 50px;
  background-color: ${ colors.lighter };
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${ colors.text_black };
`;