import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/Header';
import AddressItem from '../../components/AddressItem';
import AddressList from '../../components/AddressList';

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
    <View>
      <Header />
      <AddressList addressData={data}/>
    </View>
  );
};

export default AddressListScreen;
