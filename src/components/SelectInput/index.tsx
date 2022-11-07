import React, { useState, useCallback } from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components';
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

interface SelectInputProps {
    onPress: () => void;
    data: IPicker[];
    label?: string;
    design: string;
    error?: string;
    name: string,
    control: Control<FieldValue<FieldValues>>;
}

const SelectInput = ({ onPress, data, label, design, error, name, control }: SelectInputProps): JSX.Element => {
    const [visible, setVisible] = useState(false);
    const { colors } = useTheme();
    const { field } = useController({ name, control });
    const [search, setSearch] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const filterData = search.length > 0
    ? data.filter(value => value.label.toUpperCase().includes(search.toUpperCase()))
    : [];

    const handlePress = useCallback((item: IPicker) => {
        onPress();
        setVisible(false);
        setSelectValue(item.label);
        field.onChange(item.key);
        return item.key.toString;
    }, []);

    const handleReset = () => {
        handlePress({key: '', label: ''});
        setSelectValue('');
    }

    return (
        <ContainerSelectInput>
            <ContentSelectInput design={ design }>
                { label && <Label>{ label }</Label> }
                <ContentRow>
                    {
                        selectValue == ''
                        ? <Placeholder>Selecione...</Placeholder>
                        :
                        <ButtonResetValue onPress={ handleReset }>
                            <MCIcon name='close-circle' size={24} color={ colors.placeholder }/>
                            <Value>{ selectValue }</Value>
                        </ButtonResetValue>
                    }
                    <ButtonShow onPress={ () => setVisible(true) }>
                        <MCIcon name='arrow-down-drop-circle-outline' size={24} color={ colors.primary }/>
                    </ButtonShow>
                </ContentRow>
            </ContentSelectInput>
            <TextError>{ error }</TextError>

            <Modal
                visible={ visible }
                animationType='fade'
                transparent
            >
                <BtnCloseModal
                    activeOpacity={1}
                    underlayColor={ colors.darkTransparent }
                    onPress={ () => setVisible(false) }
                >
                    <ContainerModal>
                        <InputFilter
                            placeholder="Filtrar..."
                            onChangeText={ (e: string) => setSearch(e)}
                            value={ search }
                        />
                        <FlatList
                            data={ search.length > 0 ? filterData : data }
                            renderItem={({ item, index }: IFlatListProps) => <Item onPress={ () => handlePress(item) } value={ item } /> }
                            keyExtractor={() => String(Math.random())}
                            showsVerticalScrollIndicator={ false }
                        />
                    </ContainerModal>
                </BtnCloseModal>
            </Modal>
        </ContainerSelectInput>
    );
}

export default SelectInput;