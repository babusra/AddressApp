import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {horizontalScale, moderateScale} from '../constants/Dimensions';

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
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="location" size={25} color={'#450D87'} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{address?.addressTitle}</Text>
        <Text style={{color: '#6F6085'}} numberOfLines={1}>
          {address?.addressDetail}
        </Text>
      </View>
      <View style={styles.cityContainer}>
        <Text style={{color: '#3D2852'}}>
          {address?.districtName} / {address?.cityName}
        </Text>
        <TouchableOpacity
          style={{paddingLeft: horizontalScale(5), justifyContent: 'flex-end'}}>
          <Icon name="chevron-small-right" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: moderateScale(15),
    paddingTop: moderateScale(5),
    alignItems: 'center',
    gap: moderateScale(15),
  },
  iconContainer: {
    backgroundColor: '#F1EEF7',
    padding: moderateScale(10),
    borderRadius: 50,
    width: moderateScale(45),
    height: moderateScale(45),
  },
  titleContainer: {flex: 0.5},
  titleText: {fontWeight: 500, fontSize: 14, lineHeight: 18},
  cityContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
