import React, { useState, useEffect, useCallback } from 'react';
import {
    Platform,
    Alert
} from 'react-native';
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
import Dialog, { IDialogItemProps, IOptionsProp } from '../../components/Dialog';
import Toast, { IToastItemProps } from '../../components/Toast';

/* behavior={Platform.OS === 'ios' ? 'padding' : undefined} */

const Home = () => {
    const [dialogList, setDialogList] = useState<IDialogItemProps[]>([]);
    const [toastList, setToastList] = useState<IToastItemProps[]>([]);

    const dialog = (title: string, subtitle: string, options?: IOptionsProp[], loading?: boolean) => {
        setDialogList([...dialogList, {
            id: dialogList.length + 1,
            title: title,
            subtitle: subtitle,
            options: options,
            loading: loading,
            design: design
        }])
    }

    const toast = (title: string, subtitle: string, type?: string) => {
        setToastList([...toastList, {
            id: toastList.length + 1,
            title: title,
            subtitle: subtitle,
            type: !type ? 'success' : type
        }]);
    }
    
    const {
        control,
        watch,
        handleSubmit
    } = useForm();
    const [design, setDesign] = useState('default');
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

    const handleDialog = () => {
        dialog('Título', 'Subtítulo');
    }

    const handleDialog2 = () => {
        dialog('', 'Subtítulo', [
            { text: 'Opção 1', onPress: () => Alert.alert('Chamada de função') },
            { text: 'Opção 2', onPress: () => Alert.alert('Chamada de função') },
            { text: 'Opção 3', onPress: () => Alert.alert('Chamada de função') },
            { text: 'Opção 4', onPress: () => Alert.alert('Chamada de função') },
            { text: 'Cancelar', onPress: () => {} }
        ]);
    }

    const handleDialog3 = () => {
        dialog('Carregando...', 'Aguarde um momento.', undefined, true);

        setTimeout(() => {
            setDialogList([]);
        }, 3000);
    }

    const handleToast = () => {
        toast('Sucesso', 'Mensagem de sucesso.', 'success');
    }

    const handleToast2 = () => {
        toast('Informação', 'Mensagem de informação.', 'info');
    }

    const handleToast3 = () => {
        toast('Aviso', 'Mensagem de aviso.', 'warning');
    }

    const handleToast4 = () => {
        toast('Erro', 'Mensagem de erro.', 'danger');
    }

    return (
        <ContainerHome>
            <Dialog dialogList={ dialogList } setDialogList={ setDialogList } />
            <Toast toastList={ toastList } setToastList={ setToastList }/>

            <ButtonDesign onPress={ handleDesign }>
                <LabelDesign>Design { design }</LabelDesign>
            </ButtonDesign>
            <Scroll>
                <Title>Botões</Title>
                
                <Button design={ design } onPress={ () => Alert.alert('Chamada de função') }>
                    Padrão
                </Button>

                <Button design={ design } onPress={() => Alert.alert('Chamada de função')} disabled>
                    Desabilitado
                </Button>

                <Button design={ design } onPress={ handleLoading } loading={ loading }>
                    Carregando
                </Button>

                <Button design={ design } onPress={() => Alert.alert('Chamada de função')} transparent>
                    Transparente
                </Button>

                <Button design={ design } onPress={() => Alert.alert('Chamada de função')} outline>
                    Com borda
                </Button>

                <Title>Entrada de texto</Title>

                <Input design={ design } name='name0' label='Etiqueta' placeholder='Exemplo' />
                <Input design={ design } name='name1' label='Etiqueta' requiredLabel placeholder='000.000.000-00' maskFormat='[000].[000].[000]-[00]' />
                <Input design={ design } name='name2' placeholder='Senha' password />
                <Input design={ design } name='name3' placeholder='Mensagem de erro' error='Mensagem de erro'/>

                <Title>Entrada de opções</Title>
                <SelectInput
                    design={ design }
                    data={ options }
                    label='Etiqueta'
                    type='text'
                    name='name4'
                    control={ control }
                />

                <SelectInput
                    design={ design }
                    data={ options }
                    label='Com chamada de função'
                    requiredLabel
                    type='text'
                    name='name5'
                    control={ control }
                    onPress={ () => Alert.alert('Chamada de função') }
                />

                <SelectInput
                    design={ design }
                    data={ options }
                    type='text'
                    name='name6'
                    control={ control }
                />

                <SelectInput
                    design={ design }
                    data={ options }
                    type='text'
                    name='name7'
                    control={ control }
                    onPress={ () => {} }
                    error='Mensagem de erro'
                />
                
                <Title>Entrada de data ou hora</Title>
                <SelectInput
                    design={ design }
                    label='Etiqueta data'
                    type='date'
                    name='name8'
                    control={ control }
                />

                <SelectInput
                    design={ design }
                    type='time'
                    label='Etiqueta hora'
                    requiredLabel
                    name='name9'
                    control={ control }
                />

                <SelectInput
                    design={ design }
                    type='time'
                    name='name10'
                    control={ control }
                />

                <SelectInput
                    design={ design }
                    type='date'
                    name='name11'
                    control={ control }
                    error='Mensagem de erro'
                />

                <Title>Diálogo</Title>
                <Button design={ design } onPress={ handleDialog }>
                    Exibir
                </Button>
                <Button design={ design } onPress={ handleDialog2 }>
                    Com opções
                </Button>
                <Button design={ design } onPress={ handleDialog3 }>
                    Com carregamento
                </Button>

                <Title>Aviso rápido</Title>
                <Button design={ design } onPress={ handleToast }>
                    Sucesso
                </Button>

                <Button design={ design } onPress={ handleToast2 }>
                    Informação
                </Button>

                <Button design={ design } onPress={ handleToast3 }>
                    Aviso
                </Button>

                <Button design={ design } onPress={ handleToast4 }>
                    Erro
                </Button>

            </Scroll>
        </ContainerHome>
    );
}

export default Home;