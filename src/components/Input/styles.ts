import styled, { css } from 'styled-components/native';
import TextInputMaskRN from 'react-native-text-input-mask';
import { useTheme } from 'styled-components';
const { colors } = useTheme();


interface ContentProps {
    design?: string;
}

export const ContainerInput = styled.View`
    width: 100%;
    margin: 20px 0;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View<ContentProps>`
    width: 88%;

    ${({ design }: ContentProps) => {
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
    font-size: 14px;
    font-weight: bold;
    color: ${ colors.primary_dark };
    margin-top: 7px;
`;

export const TextInput = styled(TextInputMaskRN)`
    flex: 1;
    padding: 15px 0;
    font-size: 18px;
    color: #112345;
`;

export const TextError = styled.Text`
    width: 88%;
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
    color: ${ colors.error };
    text-align: justify;
`;