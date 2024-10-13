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
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#F1EEF7',
          padding: 10,
          borderRadius: 50,
          width: 45,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="location" size={25} color={'#450D87'} />
      </View>
      <View>
        <Text style={{fontWeight: 500, fontSize: 14, lineHeight: 18}}>
          {address?.addressTitle}
        </Text>
        <Text style={{color:"#6F6085"}} numberOfLines={1}>{address?.addressDetail}</Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={{color:"#3D2852"}}>
          {address?.districtName} / {address?.cityName}
        </Text>
      </View>
      <TouchableOpacity>
        <Icon name="chevron-small-right" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default AddressItem;
