import React from 'react';
import {
    Container,
    Text,
} from './styles';

interface IPicker {
    key: string | number;
    label: string;
}
  
interface ItemProps{
    value: IPicker;
    onPress: () => void;
}

const Item = ({ value, onPress }: ItemProps): JSX.Element => {
    return (
        <Container onPress={ onPress }>
            <Text>{ value.label }</Text>
        </Container>
    );
}

export default Item;