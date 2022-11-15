import React from 'react';
import {
    Container,
    Text,
} from './styles';

interface IPicker {
    key: string | number;
    label: string;
}
  
interface IItemProps{
    value: IPicker;
    onPress: () => void;
}

const Item = ({ value, onPress }: IItemProps): JSX.Element => {
    return (
        <Container onPress={ onPress }>
            <Text>{ value.label }</Text>
        </Container>
    );
}

export default Item;