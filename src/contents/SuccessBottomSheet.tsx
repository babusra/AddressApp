import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {moderateScale, height} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';

const SuccessBottomSheet: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="checkcircleo" size={25} color={Colors.buttonGreen} />
      </View>
      <Text style={styles.text}>Adresin başarıyla kaydedildi!</Text>
    </View>
  );
};

export default SuccessBottomSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: moderateScale(20),
    height: height / 3.5,
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScale(15),
  },
  iconContainer: {
    backgroundColor: '#E3F7F7',
    padding: moderateScale(15),
    borderRadius: 50,
  },
  text: {fontSize: 16, fontWeight: '500'},
});
