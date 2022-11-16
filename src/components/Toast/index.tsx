import React, { useCallback, useEffect } from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components';
import {
    ContainerToast,
    Content,
    ContentColumn,
    Title,
    SubTitle,
    ButtonClose
} from './styles';

export interface IToastItemProps {
    id: number;
    title?: string;
    subtitle: string;
    type?: string; // 'success' | 'info' | 'danger' | 'warning'
}

interface IToastProps {
    toastList: IToastItemProps[];
    setToastList: (toastList: IToastItemProps[]) => void;
}

const Toast = ({ toastList, setToastList }: IToastProps): JSX.Element => {
    const { colors } = useTheme();

    const handleRemove = useCallback((id: number) => {
        const toastListFilter = toastList.filter(toast => toast.id !== id);
        setToastList(toastListFilter);
    }, [toastList, setToastList]);

    useEffect(() => {
        const interval = setInterval(() => {
            if(toastList.length) handleRemove(toastList[0].id);
        }, 3000);

        return () => clearInterval(interval);
    }, [toastList, handleRemove]);

    return (
        <ContainerToast>
            {
                toastList.map((toast, i) => (
                    <Content
                        animation='fadeInDown'
                        duration={ 300 }
                        delay={100}
                        useNativeDriver={true}
                        key={ i }
                    >
                        <MCIcon
                            name={
                                toast.type == 'success'
                                ? 'check-circle-outline' :
                                toast.type == 'info' ?
                                'information-outline' :
                                toast.type == 'danger' ?
                                'close-circle-outline' :
                                'exclamation'
                            }
                            size={24}
                            color={
                                toast.type == 'success'
                                ? colors.success :
                                toast.type == 'info' ?
                                colors.info :
                                toast.type == 'danger' ?
                                colors.error :
                                colors.warning
                            }
                        />
                        <ContentColumn>
                            <Title numberOfLines={1} type={ toast.type }>{ toast.title }</Title>
                            <SubTitle>{ toast.subtitle }</SubTitle>
                        </ContentColumn>
                        <ButtonClose onPress={ () => handleRemove(toast.id)}>
                            <MCIcon
                                name='close'
                                size={20}
                                color={ colors.text_desable }
                            />
                        </ButtonClose>
                    </Content>
                ))
            }
        </ContainerToast>
    );
}
 
export default Toast;