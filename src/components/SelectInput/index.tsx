import React, { useState, useCallback } from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components';
import DateTimePicker from '@react-native-community/datetimepicker';
import Item from './components/Item';
import {
    Control,
    FieldValue,
    FieldValues,
    useController,
} from 'react-hook-form';
import {
    ContainerSelectInput,
    ContentSelectInput,
    ContentRow,
    ButtonShow,
    Label,
    Placeholder,
    Value,
    Modal,
    ContainerModal,
    FlatList,
    BtnCloseModal,
    InputFilter,
    ButtonResetValue,
    TextError
} from './styles';

interface IPicker {
    key: string | number;
    label: string;
}

interface IFlatListProps {
    item: IPicker;
    index: number;
}

interface ISelectInputProps {
    onPress?: () => void;
    data?: IPicker[];
    label?: string;
    requiredLabel?: boolean;
    design: string;
    type: string | any; // 'text' | 'date' | 'time'
    error?: string;
    name: string,
    control: Control<FieldValue<FieldValues>>;
}

const SelectInput = ({ onPress, data, label, requiredLabel, design, type, error, name, control }: ISelectInputProps): JSX.Element => {
    const { field } = useController({ name, control });
    const moment = require('moment');
    const { colors } = useTheme();

    const [showText, setShowText] = useState(false);
    const [showDateTime, setShowDateTime] = useState(false);

    const [selectText, setSelectText] = useState('');
    const [selectDateTime, setSelectDateTime] = useState<Date>(new Date());
    const [formatDateTime, setFormatDateTime] = useState('');
    
    const [search, setSearch] = useState('');
    const filterData = data !== undefined &&
        search.length > 0
        ? data.filter(value => value.label.toUpperCase().includes(search.toUpperCase()))
        : [];

    // selecionar opção para texto
    const handlePressText = useCallback((item: IPicker) => {
        onPress && onPress();
        setShowText(false);
        setSelectText(item.label);
        field.onChange(item.key);
        return item.key.toString;
    }, []);

    // Selecionar opção para data
    const handlePressDateTime = useCallback((event: Event, selectedDateTime: Date | undefined) => {
        setShowDateTime(false);
        if(!selectedDateTime) return undefined;
        setSelectDateTime(selectedDateTime);

        // Formatar data para exibição
        if(type == 'date') setFormatDateTime(moment(selectedDateTime).format("DD/MM/YYYY"));

        // Formatar tempo para exibição
        if(type == 'time') setFormatDateTime(moment(selectedDateTime).format("HH:mm"));

        field.onChange(selectedDateTime);
        return selectedDateTime;
    }, []);

    const handleReset = () => {
        setSelectText('');
        setSelectDateTime(new Date);
        field.onChange(undefined);
        return undefined;
    }

    const handleShowDateTime = () => {
        setShowDateTime(!showDateTime);
    }

    // Exibir modal de seleção
    const handleVisibleType = () => {
        type == 'text' && setShowText(true);
        type == 'date' && handleShowDateTime();
        type == 'time' && handleShowDateTime();
    }

    return (
        <ContainerSelectInput>
            <ContentSelectInput design={ design }>
                { label && <Label>{ label } { requiredLabel && <MCIcon name='asterisk' size={13} color={ colors.error }/> }</Label> }
                <ContentRow>
                    {
                        field.value == undefined
                        ? <Placeholder>Selecione...</Placeholder>
                        :
                        <ButtonResetValue onPress={ handleReset }>
                            <MCIcon name='close-circle' size={24} color={ colors.placeholder }/>
                            <Value>{ selectText == '' ? formatDateTime : selectText }</Value>
                        </ButtonResetValue>
                    }
                    <ButtonShow onPress={ handleVisibleType }>
                        <MCIcon
                            name={
                                type == 'text' ? 'arrow-down-drop-circle-outline' :
                                type == 'date' ? 'calendar':
                                'clock'
                            }
                            size={24}
                            color={ colors.primary }/>
                    </ButtonShow>
                </ContentRow>
            </ContentSelectInput>
            <TextError>{ error }</TextError>

            {/* Modal para selecionar opções de texto */}
            <Modal
                visible={ showText }
                animationType='fade'
                transparent
            >
                <BtnCloseModal
                    activeOpacity={1}
                    underlayColor={ colors.darkTransparent }
                    onPress={ () => setShowText(false) }
                >
                    <ContainerModal>
                        <InputFilter
                            placeholder="Filtrar..."
                            onChangeText={ (e: string) => setSearch(e)}
                            value={ search }
                        />
                        <FlatList
                            data={ search.length > 0 ? filterData : data }
                            renderItem={({ item, index }: IFlatListProps) => <Item onPress={ () => handlePressText(item) } value={ item } /> }
                            keyExtractor={() => String(Math.random())}
                            showsVerticalScrollIndicator={ false }
                        />
                    </ContainerModal>
                </BtnCloseModal>
            </Modal>

            {
                // Modal para selecionar data e hora
                showDateTime
                && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        display='default'
                        mode={ type }
                        value={ selectDateTime }
                        onChange={ handlePressDateTime }
                    />
                )
            }
        </ContainerSelectInput>
    );
}

export default SelectInput;