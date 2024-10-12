import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {moderateScale} from '../constants/Dimensions';

interface Props {
  address: {
    id: string;
    cityName: string;
    districtName: string;
    addressTitle: string;
    addressDetail: string;
  };
}
const AddressItem: React.FC<Props> = ({address}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: moderateScale(20),
        paddingTop: moderateScale(5),
        alignItems:'center'
      }}>
      <Icon name="location" size={25} />
      <View>
        <Text>{address?.addressTitle}</Text>
        <Text numberOfLines={1}>{address?.addressDetail}</Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text>
          {address?.districtName} / {address?.cityName}
        </Text>
      </View>
      <TouchableOpacity>
        <Icon name="chevron-right" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default AddressItem;
