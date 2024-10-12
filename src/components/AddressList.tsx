import React from 'react';
import {FlatList} from 'react-native';
import AddressItem from './AddressItem';


interface Props {
  addressData: any[];
}

const AddressList: React.FC<Props> = ({addressData}) => {
  return (
    <FlatList
      data={addressData}
      renderItem={({item}) => {
        return (
          <AddressItem
            address={{
              id: item?.id,
              cityName: item?.cityName,
              districtName: item?.districtName,
              addressTitle: item?.addressTitle,
              addressDetail: item?.addressDetail,
            }}
          />
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default AddressList;
