import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../constants/Dimensions';
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
    <View style={[containerStyle, , styles.container]}>
      <TouchableOpacity
        style={[
          buttonStyle,
          ,
          {
            ...styles.button,
            backgroundColor: disabled ? Colors.primaryGrey : Colors.buttonGreen,
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: moderateScale(10),
    alignItems: 'center',
    elevation: 5,
    paddingBottom: verticalScale(40),
  },
  button: {
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(18),
    alignItems: 'center',
    width: '100%',
    borderRadius: 6,
  },
});
