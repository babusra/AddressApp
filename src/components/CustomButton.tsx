import React from 'react';
import {StyleProp, Text, TouchableOpacity, View} from 'react-native';
import {horizontalScale, verticalScale} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';
import {ViewStyle} from 'react-native';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<Props> = ({
  containerStyle,
  buttonStyle,
  title,
  onPress,
  disabled,
}) => {
  return (
    <View
      style={[
        containerStyle,
        {
          backgroundColor: Colors.white,
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
            backgroundColor: disabled ? Colors.primaryGrey : Colors.buttonGreen,
            borderRadius: 6,
            opacity: disabled ? 0.6 : 1,
          },
        ]}
        disabled={disabled}
        onPress={onPress}>
        <Text
          style={{
            color: disabled ? Colors.buttonGrey : Colors.white,
            fontSize: 16,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
