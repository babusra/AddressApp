import React from 'react';
import {FlatList, Text, View} from 'react-native';
import AddressItem from './AddressItem';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';
import {ItemSeparator} from './ItemSeparator';

interface Props {
  addressData: any[];
}

const AddressList: React.FC<Props> = ({addressData}) => {
 
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
        ListEmptyComponent={<Text>Kayıt yok</Text>}
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
