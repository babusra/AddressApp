import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Header from '../../components/Header';
import AddressList from '../../components/AddressList';
import {moderateScale} from '../../constants/Dimensions';
import CustomButton from '../../components/CustomButton';
import {navigation} from '../../navigation/rootNavigation';
import {styles} from './styles';
import UseAddressListManager from './UseAddressListManager';

const AddressListScreen: React.FC = () => {
  const {t, loading, addresses, onDelete} = UseAddressListManager();

  return (
    <View style={styles.container}>
      <Header />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={{padding: moderateScale(15)}}>
          <AddressList
            addressData={addresses}
            onDelete={(item: string) => onDelete(item)}
          />
        </View>
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
