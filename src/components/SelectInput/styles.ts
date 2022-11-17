import styled, { css } from 'styled-components/native';
import { useTheme } from 'styled-components';
const { colors } = useTheme();

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
        if(design == 'minimal'){
            return css`
                border-bottom-width: 1px;
                border-bottom-color: ${ colors.primary };
            `;
        }
        if(design == 'default'){
            return css`
                border-radius: 11px;
                background-color: ${ colors.lighter };
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
    font-size: ${ colors.font_size_small };
    font-weight: bold;
    color: ${ colors.primary_dark };
    margin-top: 7px;
`;

export const Placeholder = styled.Text`
    flex: 1;
    padding: 15px 0;
    font-size: ${ colors.font_size_normal };
    color: ${ colors.placeholder }
`;

export const Value = styled.Text`
    padding: 15px 0 15px 4px;
    font-size: ${ colors.font_size_normal };
    color: ${ colors.darker };
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
  background-color: ${ colors.background };
`;

export const FlatList = styled.FlatList``;

export const BtnCloseModal = styled.TouchableHighlight`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${ colors.darkTransparent };
`;

export const InputFilter = styled.TextInput`
  font-size: ${ colors.font_size_normal };
  padding: 15px;
  margin-bottom: 5px;
`;

export const TextError = styled.Text`
    width: 88%;
    margin-top: 10px;
    font-size: ${ colors.font_size_small };
    font-weight: bold;
    color: ${ colors.error };
    text-align: justify;
`;