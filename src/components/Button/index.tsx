import React, { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';
import {
    ContainerButton,
    ContentButton,
    Label,
    Modal,
    ContainerModal
} from './styles';

interface ButtonProps {
    children: ReactNode | string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    outline?: boolean;
    outlineLight?: boolean;
    design: string;
}

const Button = ({ children, onPress, disabled, loading, outline, outlineLight, design } : ButtonProps): JSX.Element => {
    return (
        <ContainerButton>
            <ContentButton
                onPress={ onPress }
                disabled={ disabled || loading}
                outline={ outline }
                outlineLight={ outlineLight }
                design={ design }
            >
                {
                    loading
                    ? <ActivityIndicator size="small" color="white"/>
                    : <Label outline={ outline } outlineLight={ outlineLight }>{children}</Label>
                }
            </ContentButton>

            {
                loading &&
                <Modal
                    visible={ loading }
                    animationType='fade'
                    transparent
                >
                    <ContainerModal></ContainerModal>
                </Modal>
            }
        </ContainerButton>
    );
}

export default Button;
