import React, {useCallback} from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import {
  ContainerDialog,
  Modal,
  ContainerClose,
  Content,
  Title,
  Subtitle,
  ContainerButton,
  ButtonOption,
  ButtonOptionLabel,
  FlatList,
  Scroll,
  ContentModalHeader,
  Handle,
} from './styles';

export interface IOptionsProp {
  text: string;
  onPress: () => void;
}

export interface IDialogItemProps {
  id: number;
  design: 'default' | 'minimal';
  title?: string;
  subtitle?: string;
  options?: IOptionsProp[];
  loading?: boolean;
}

interface IDialogProps {
  dialogList: IDialogItemProps[];
  setDialogList: (dialogList: IDialogItemProps[]) => void;
}

const Dialog = ({dialogList, setDialogList}: IDialogProps): JSX.Element => {
  const {colors} = useTheme();

  const handlePressOption = (item: IOptionsProp, id: number) => {
    item.onPress();
    handleRemove(id);
  };

  const handleRemove = useCallback(
    (id: number) => {
      const dialogListFilter = dialogList.filter(dialog => dialog.id !== id);
      setDialogList(dialogListFilter);
    },
    [dialogList, setDialogList],
  );

  return (
    <ContainerDialog>
      <Modal
        visible={dialogList.length ? true : false}
        animationType="fade"
        transparent>
        {dialogList.map((dialog, i) => (
          <ContainerClose
            design={dialog.design}
            activeOpacity={1}
            underlayColor={colors.darkTransparent}
            onPress={
              !dialog.loading && dialog.design == 'default'
                ? () => handleRemove(dialog.id)
                : () => {}
            }
            key={i}>
            <Content
              animation={
                dialog.design == 'minimal' ? 'bounceInLeft' : 'fadeInUp'
              }
              duration={350}
              useNativeDriver={true}
              design={dialog.design}>
              {
                // Detalhe do cabeçario do modal
                dialog.design == 'default' && (
                  <ContentModalHeader>
                    <Handle></Handle>
                  </ContentModalHeader>
                )
              }
              <Scroll>
                {dialog.title && (
                  <Title numberOfLines={1}>{dialog.title}</Title>
                )}
                <Subtitle>{dialog.subtitle}</Subtitle>
              </Scroll>
              <ContainerButton>
                <FlatList
                  data={dialog.options}
                  renderItem={({item}: any) => (
                    <ButtonOption
                      onPress={() => handlePressOption(item, dialog.id)}
                      design={dialog.design ?? 'default'}
                      isCancel={
                        item.text.toUpperCase() == 'CANCELAR' ||
                        item.text.toUpperCase() == 'VOLTAR' ||
                        item.text.toUpperCase() == 'NÃO'
                      }>
                      <ButtonOptionLabel
                        numberOfLines={1}
                        isCancel={
                          item.text.toUpperCase() == 'CANCELAR' ||
                          item.text.toUpperCase() == 'VOLTAR' ||
                          item.text.toUpperCase() == 'NÃO'
                        }>
                        {item.text}
                      </ButtonOptionLabel>
                    </ButtonOption>
                  )}
                  ListEmptyComponent={
                    <ButtonOption
                      onPress={() => handleRemove(dialog.id)}
                      disabled={dialog.loading}
                      design={dialog.design}>
                      <ButtonOptionLabel>
                        {dialog.loading ? (
                          <ActivityIndicator size="small" color="white" />
                        ) : (
                          'OK'
                        )}
                      </ButtonOptionLabel>
                    </ButtonOption>
                  }
                  keyExtractor={() => String(Math.random())}
                  showsVerticalScrollIndicator={false}
                />
              </ContainerButton>
            </Content>
          </ContainerClose>
        ))}
      </Modal>
    </ContainerDialog>
  );
};

export default Dialog;
