import React, { useState, useEffect } from 'react';
import { Platform, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { 
    ContainerHome,
    Scroll,
    Title,
    ButtonDesign,
    LabelDesign
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';

/* behavior={Platform.OS === 'ios' ? 'padding' : undefined} */

const Home = () => {
    const {
        control,
        watch,
        handleSubmit
    } = useForm();
    const [design, setDesign] = useState('minimal');
    const [loading, setLoading] = useState(false);
    const options = [
        { key: '1', label: 'Primeiro' },
        { key: '2', label: 'Segundo' },
        { key: '3', label: 'Terceiro' },
    ];

    const handleDesign = () => {
        design == 'default' ? setDesign('minimal') : setDesign('default');
    }

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000);
    }

    return (
        <ContainerHome>
            <ButtonDesign onPress={ handleDesign }>
                <LabelDesign>Design { design }</LabelDesign>
            </ButtonDesign>
            <Scroll>
                <Title>Botões</Title>
                
                <Button design={ design } onPress={() => {Alert.alert('Alert', 'Alert')}}>
                Default
                </Button>

                <Button design={ design } onPress={() => {}} disabled>
                Disabled
                </Button>

                <Button design={ design } onPress={ handleLoading } loading={ loading }>
                Loading
                </Button>

                <Button design={ design } onPress={() => {Alert.alert('Alert', 'Alert')}} outlineLight>
                OutlineLight
                </Button>

                <Button design={ design } onPress={() => {Alert.alert('Alert', 'Alert')}} outline>
                Outline
                </Button>

                <Title>Entrada de texto</Title>

                <Input design={ design } name='name' label='Label' placeholder='Exemplo' />
                <Input design={ design } name='name' label='Mask' placeholder='00/00/0000' maskFormat='[00]/[00]/[0000]' />
                <Input design={ design } name='name' placeholder='Exemplo' password />
                <Input design={ design } name='name' placeholder='Exemplo' error='Mensagem de erro'/>

                <Title>Entrada de opções</Title>
                <SelectInput
                    design={ design }
                    data={ options }
                    name='default'
                    control={ control }
                    onPress={ () => {} }
                />

                <SelectInput
                    design={ design }
                    data={ options }
                    label='Function'
                    name='select'
                    control={ control }
                    onPress={ () => Alert.alert('Alert', `${ watch('select') }`) }
                />

                <SelectInput
                    design={ design }
                    data={ options }
                    name='default'
                    control={ control }
                    onPress={ () => {} }
                    error='Mensagem de erro'
                />
            </Scroll>
        </ContainerHome>
    );
}

export default Home;
