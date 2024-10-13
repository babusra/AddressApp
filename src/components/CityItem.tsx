import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from '../constants/Dimensions';

interface Props {
  cityName: string;
  onPress: () => void;
}

const CityItem: React.FC<Props> = ({cityName, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{padding: moderateScale(20)}}>{cityName}</Text>
    </TouchableOpacity>
  );
};

export default CityItem;
