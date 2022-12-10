import styled, { css } from 'styled-components/native';
import { useTheme } from 'styled-components';
const { colors } = useTheme();

interface IOutlineProps {
    enabled?: boolean;
    outline?: boolean;
    transparent?: boolean;
}

interface IContainerButtonProps extends IOutlineProps{
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
    background-color: ${ colors.primary };
    border-color: ${ colors.primary };

    ${({ outline, transparent, design, enabled }: IContainerButtonProps) => {
        var cssResult = css``;
        if(!enabled){
            cssResult += css`
                background-color: #444849;
            `;
        }
        if(outline){
            cssResult += css`
                background-color: ${ colors.transparent };
                border-width: 1.5px;
            `;
        }
        if(transparent){
            cssResult += css`
                background-color: transparent;
            `;
        }
        if(design == 'minimal'){
            cssResult += css`
                border-radius: 50px;
            `;
        }
        if(design == 'default'){
            cssResult += css`
                border-radius: 11px;
            `;
        }
        return cssResult;
    }};
`;

export const Label = styled.Text<IOutlineProps>`
    font-size: ${ colors.font_size_normal };
    color: ${ colors.lighter };

    ${({ outline, transparent, enabled }: IOutlineProps) => {
        var cssResult = css``;
        if(!enabled){
            cssResult += css`
                color: #999;
            `;
        }
        if(outline || transparent){
            cssResult = css`
                color: ${ colors.primary };
            `;
        }
        return cssResult;
    }};
`;

export const Modal = styled.Modal`
    width: 100%;
`;

export const ContainerModal = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${ colors.transparent };
`;