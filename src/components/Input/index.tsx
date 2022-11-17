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

interface IInputProps extends TextInputProps{
    label?: string;
    requiredLabel?: boolean;
    maskFormat?: string;
    name: string;
    error?: string;
    control?: Control<FieldValue<FieldValues>>;
    password?: boolean;
    design: string;
}

const Input = ({ label, requiredLabel, name, error, control, maskFormat, password, design, ...rest }: IInputProps): JSX.Element => {
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
                { label && <Label>{ label } { requiredLabel && <MCIcon name='asterisk' size={13} color={ colors.error }/> }</Label> }
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
            { error &&  <TextError>{ error }</TextError> }
        </ContainerInput>
    );
}

export default Input;