import React, { useCallback, useState } from 'react';
import {
    Control,
    FieldValue,
    FieldValues,
    useController,
    useForm,
} from 'react-hook-form';
import { useTheme } from 'styled-components';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInputProps } from 'react-native';
import {
    ContainerInput,
    Content,
    Label,
    TextInput,
    TextError,
    ContentRow,
    ButtonShow
} from './styles';

interface InputProps extends TextInputProps{
    label?: string;
    maskFormat?: string;
    name: string;
    error?: string;
    control?: Control<FieldValue<FieldValues>>;
    password?: boolean;
    design: string;
}

const Input = ({ label, name, error, control, maskFormat, password, design, ...rest }: InputProps): JSX.Element => {
    const { colors } = useTheme();
    const [eye, setEye] = useState('eye-off-outline');

    // Integração com React Hook Form
    const form = useForm();
    const { field } = useController({
        name,
        control: control || form.control,
        defaultValue: '',
    });

    const handleChangeValue = useCallback((value: string) => {
        field.onChange(value);
    }, [field]);

    const handleEye = () => {
        eye == 'eye-outline' ? setEye('eye-off-outline') : setEye('eye-outline');        
    }

    return (
        <ContainerInput>
            <Content design={ design }>
                { label && <Label>{ label }</Label> }
                <ContentRow>
                    <TextInput
                        onChangeText={ handleChangeValue }
                        value={ field.value }
                        mask={ maskFormat }
                        secureTextEntry={ eye == 'eye-off-outline' && password }
                        {...rest}
                    />
                    {
                        password
                        &&
                        <ButtonShow onPress={ handleEye }>
                            <MCIcon name={ eye } size={24} color={ colors.primary }/>
                        </ButtonShow>
                    }
                </ContentRow>
            </Content>
            <TextError>{ error }</TextError>
        </ContainerInput>
    );
}

export default Input;