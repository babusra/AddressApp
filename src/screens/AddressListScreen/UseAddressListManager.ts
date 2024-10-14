import {useCallback} from 'react';
import {deleteAddress} from '../../services/api/addressApi';
import {useTranslation} from 'react-i18next';
import {useFocusEffect} from '@react-navigation/core';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAddressList} from '../../reduxToolkit/features/addressSlice';
import {AppDispatch} from '../../reduxToolkit/store';

const UseAddressListManager = () => {
  const {t} = useTranslation();

  const dispatch = useDispatch<AppDispatch>();
  const {addresses, loading} = useSelector((state: any) => state.address);

  const onDelete = (item: string) => {
    Alert.alert(
        t('deleteConfirmationTitle'),
      '',
      [
        {
          text: t('cancel'),
          style: 'cancel',
        },
        {
          text: t('yes'),
          onPress: async () => {
            await deleteAddress(item);
            dispatch(fetchAddressList());
          },
        },
      ],
      {cancelable: true},
    );
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchAddressList());
    }, []),
  );
  return {
    t,
    loading,
    addresses,
    onDelete,
  };
};

export default UseAddressListManager;
