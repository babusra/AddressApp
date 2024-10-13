import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {navigation} from '../navigation/rootNavigation';

interface Props {
  onPressBack: () => void;
}
const Header: React.FC<Props> = ({onPressBack}) => {
  return (
    <LinearGradient
      colors={[Colors.gradientFirst, Colors.gradientSecond]}
      style={styles.linearGradient}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: moderateScale(20),
          }}>
          <TouchableOpacity
            onPress={onPressBack}
            style={{position: 'absolute', left: 0}}>
            <Icon name="left" size={18} color={Colors.grey} />
          </TouchableOpacity>
          <Text
            style={{
              lineHeight: 20,
              textAlign: 'center',
              color: Colors.grey,
              fontSize: 16,
            }}>
            Adreslerim
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'center',
            color: Colors.white,
            fontSize: 20,
            paddingVertical: 10,
          }}>
          Adres Bilgilerin
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  linearGradient: {
    height: moderateScale(180),
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
