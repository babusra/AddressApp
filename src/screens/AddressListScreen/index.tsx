import React, {useCallback} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Header from '../../components/Header';
import AddressList from '../../components/AddressList';
import {moderateScale} from '../../constants/Dimensions';
import {Colors} from '../../constants/Colors';
import CustomButton from '../../components/CustomButton';
import {navigation} from '../../navigation/rootNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAddressList} from '../../reduxToolkit/features/addressSlice';
import {useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const AddressListScreen: React.FC = () => {
  const {t} = useTranslation();

  const dispatch = useDispatch();
  const {addresses, loading} = useSelector((state: any) => state.address);

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchAddressList());
    }, []),
  );
  return (
    <View
      style={{gap: moderateScale(30), backgroundColor: Colors.white, flex: 1}}>
      <Header />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <AddressList addressData={addresses} />
      )}

      <CustomButton
        title={t('addNewAddress')}
        containerStyle={{
          borderTopWidth: 1,
          borderTopColor: Colors.primaryGrey,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
        onPress={() => {
          navigation.navigate('AddNewAddressScreen');
        }}
      />
    </View>
  );
};

export default AddressListScreen;
