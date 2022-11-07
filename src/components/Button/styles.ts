import styled, { css } from 'styled-components/native';
import { useTheme } from 'styled-components';
const { colors } = useTheme();

interface outlineProps {
    outline?: boolean;
    outlineLight?: boolean;
}

interface ContainerButtonProps extends outlineProps{
    disabled?: boolean;
    design?: string;
}

export const ContainerButton = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ContentButton = styled.TouchableOpacity<ContainerButtonProps>`
    width: 88%;
    padding: 15px;
    margin: 20px 0;
    justify-content: center;
    align-items: center;
    border-radius: 11px;
    background-color: ${ colors.primary };
    border-color: ${ colors.primary };

    ${({ outline, outlineLight, disabled, design }: ContainerButtonProps) => {
        var result = ``;
        if(outline){
            result += css`
                background-color: ${ colors.transparent };
                border-width: 1.5px;
            `;
        }
        if(outlineLight){
            result += css`
                background-color: ${ colors.transparent };
            `;
        }
        if(design == 'minimal'){
            result += css`
                border-radius: 50px;
            `;
        }
        if(design == 'default'){
            result += css`
                border-radius: 11px;
            `;
        }
        return result;
    }}
`;

export const Label = styled.Text<outlineProps>`
    font-size: 20px;
    color: ${ colors.lighter };

    ${({ outline, outlineLight }: outlineProps) => {
        if(outline || outlineLight){
            return css`
                color: ${ colors.primary };
            `;
        }
    }}
`;

export const Modal = styled.Modal`
    width: 100%;
`;

export const ContainerModal = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${ colors.transparent };
`;