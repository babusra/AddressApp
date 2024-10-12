import React from 'react';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {horizontalScale, verticalScale} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';
import {ViewStyle} from 'react-native';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  title: string;
}

const CustomButton: React.FC<Props> = ({
  containerStyle,
  buttonStyle,
  title,
}) => {
  return (
    <View
      style={[
        containerStyle,
        {
          backgroundColor: '#fff',
          padding: 10,
          alignItems: 'center',
          elevation: 5, // for Android
        },
      ]}>
      <TouchableOpacity
        style={[
          buttonStyle,
          {
            paddingHorizontal: horizontalScale(16),
            paddingVertical: verticalScale(18),
            alignItems: 'center',
            width: '100%',
            backgroundColor: Colors.buttonGreen,
            borderRadius: 6,
          },
        ]}>
        <Text style={{color: Colors.white}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
