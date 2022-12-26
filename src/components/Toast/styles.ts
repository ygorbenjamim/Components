import styled, {css} from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

interface ITextProps {
  type?: string;
}

export const ContainerToast = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;

export const Content = Animatable.createAnimatableComponent<any>(styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 94%;
  min-height: 50px;
  padding: 7px 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 13px;
  background-color: ${(props: any) => props.theme.colors.darker};
`);

export const ContentColumn = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.size.small};
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.success};

  ${({type}: ITextProps) => {
    if (type == 'success') {
      return css`
        color: ${(props: any) => props.theme.colors.success};
      `;
    }
    if (type == 'info') {
      return css`
        color: ${(props: any) => props.theme.colors.info};
      `;
    }
    if (type == 'danger') {
      return css`
        color: ${(props: any) => props.theme.colors.error};
      `;
    }
    if (type == 'warning') {
      return css`
        color: ${(props: any) => props.theme.colors.warning};
      `;
    }
  }}
`;

export const SubTitle = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.size.small};
  color: ${(props: any) => props.theme.colors.regular};
`;

export const ButtonClose = styled.TouchableOpacity`
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
