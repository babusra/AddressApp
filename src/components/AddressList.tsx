import React from 'react';
import {FlatList, Text, View} from 'react-native';
import AddressItem from './AddressItem';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../constants/Dimensions';
import { Colors } from '../constants/Colors';

interface Props {
  addressData: any[];
}

const AddressList: React.FC<Props> = ({addressData}) => {
  const ItemSeparator = () => {
    return <View style={{height: 1, backgroundColor: '#F5F6F9'}} />;
  };
  return (
    <View style={{paddingHorizontal: horizontalScale(16)}}>
      <Text style={{paddingBottom: verticalScale(15)}}>Kayıtlı Adresler</Text>
      <FlatList
        data={addressData}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={{
          borderWidth: 1,
          borderColor: Colors.primaryGrey,
          gap: moderateScale(10),
          padding: moderateScale(15),
          borderRadius: 8,
        }}
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
    </View>
  );
};

export default AddressList;
