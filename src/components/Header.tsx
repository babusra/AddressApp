import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import {changeLanguage} from 'i18next';

interface Props {
  onPressBack?: () => void;
}
const Header: React.FC<Props> = ({onPressBack}) => {
  const {t} = useTranslation();

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    if (isEnabled) {
      changeLanguage('en');
    } else {
      changeLanguage('tr');
    }
  }, [isEnabled]);
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
            {t('myAddresses')}
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: 80,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text style={{color: Colors.white, fontWeight: '700'}}>TR</Text>
          <Switch
            trackColor={{false: Colors.grey, true: Colors.buttonGrey}}
            thumbColor={isEnabled ? Colors.primaryGrey : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={{color: Colors.white, fontWeight: '700'}}>EN</Text>
        </View>

        <Text
          style={{
            textAlign: 'center',
            color: Colors.white,
            fontSize: 20,
            paddingVertical: 10,
          }}>
          {t('yourAddressInformation')}
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
