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
import {styles} from './styles';

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
    <View style={styles.container}>
      <Header />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <AddressList addressData={addresses} />
      )}

      <CustomButton
        title={t('addNewAddress')}
        containerStyle={styles.button}
        onPress={() => {
          navigation.navigate('AddNewAddressScreen');
        }}
      />
    </View>
  );
};

export default AddressListScreen;
