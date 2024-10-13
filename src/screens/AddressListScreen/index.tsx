import React from 'react';
import {
  View,
} from 'react-native';
import Header from '../../components/Header';
import AddressList from '../../components/AddressList';
import {moderateScale, verticalScale} from '../../constants/Dimensions';
import {Colors} from '../../constants/Colors';
import CustomButton from '../../components/CustomButton';
import { navigation } from '../../navigation/rootNavigation';

const AddressListScreen: React.FC = () => {
  const data = [
    {
      cityName: 'İstanbul',
      districtName: 'Kağıthane',
      addressDetail: 'Çelebi Cad',
      addressTitle: 'Ev',
      id: '1',
    },
    {
      cityName: 'İstanbul',
      districtName: 'Kağıthane',
      addressDetail: 'Çelebi Cad',
      addressTitle: 'Ev',
      id: '2',
    },
  
  ];
  return (
    <View
      style={{gap: moderateScale(30), backgroundColor: Colors.white, flex: 1}}>
      <Header />

      <AddressList addressData={data} />

      <CustomButton
        title={'Yeni Adres Ekle'}
        containerStyle={{
          borderTopWidth: 1,
          borderTopColor: Colors.primaryGrey,
          position: 'absolute',
          bottom: verticalScale(30),
          left: 0,
          right: 0,
        }}
        onPress={ ()=> {
          navigation.navigate('AddNewAddressScreen')
          
      }}
      />
    </View>
  );
};

export default AddressListScreen;
