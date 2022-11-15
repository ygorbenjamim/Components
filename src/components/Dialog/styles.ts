import styled, { css } from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'styled-components';
const { colors } = useTheme();

interface IModalAnimatedProp extends Animatable.AnimatableProperties<any> {
  style?: any;
  design?: string;
}

export const ContainerDialog = styled.View`
  flex: 1;
  width: 100%;
  position: absolute;
  z-index: 1;
`;

export const Modal = styled.Modal``;

export const ContainerClose = styled.TouchableHighlight`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  background-color: ${ colors.darkTransparent };

  ${({ design }: IModalAnimatedProp) => {
    if(design == 'minimal'){
      return css`
        justify-content: center;
      `;
    }
    if(design == 'default'){
      return css`
        justify-content: flex-end;
      `;
    }
  }}
`;

export const Content = Animatable.createAnimatableComponent<any>(styled.View<IModalAnimatedProp>`
  background-color: ${ colors.background };
  padding: 15px;

  ${({ design }: IModalAnimatedProp) => {
    if(design == 'minimal'){
      return css`
        width: 87%;
        border-radius: 20px;
      `;
    }
    if(design == 'default'){
      return css`
        width: 100%;
        border-top-left-radius: 11px;
        border-top-right-radius: 11px;
        padding-top: 35px;
      `;
    }
  }}
`);

export const Scroll = styled.ScrollView`
    max-height: 60%;
`;

export const Title = styled.Text`
  color: ${ colors.primary };
  font-size: 20px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: ${ colors.primary_dark };
  font-size: 17px;
  margin-top: 10px;
`;

export const ContainerButton = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  margin-top: 35px;
  border-top-width: 0.5px;
  border-top-color: ${ colors.primary };
`;

export const ButtonOption = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3px;
  margin-bottom: 5px;
  margin-top: 5px;
  background-color: ${ colors.primary };

  ${({ design }: IModalAnimatedProp) => {
    if(design == 'minimal'){
      return css`
        border-radius: 50px;
      `;
    }
    if(design == 'default'){
      return css`
        border-radius: 11px;
      `;
    }
  }}
`;

export const ButtonOptionLabel = styled.Text`
  font-size: 17px;
  color: ${ colors.lighter };
  margin: 5px;
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
  background-color: ${ colors.transparent };
`;

export const Handle = styled.View`
  width: 13%;
  height: 4px;
  border-radius: 50px;

  background-color: ${ colors.light };
`;