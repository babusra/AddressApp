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
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../constants/Dimensions';
import {Colors} from '../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import {
  setIsEnabled,
  setLanguage,
} from '../reduxToolkit/features/languageSlice';
import {useSelector, useDispatch} from 'react-redux';
import i18n from '../common/localization/i18n';
import {RootState} from '../reduxToolkit/store';

interface Props {
  onPressBack?: () => void;
}
const Header: React.FC<Props> = ({onPressBack}) => {
  const {t} = useTranslation();

  const dispatch = useDispatch();

  const {isEnabled, language} = useSelector(
    (state: RootState) => state.language,
  );
  const toggleSwitch = () => dispatch(setIsEnabled(!isEnabled));

  const changeLanguage = (lang: string) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
  };
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
        <View style={styles.container}>
          <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
            <Icon name="left" size={18} color={Colors.grey} />
          </TouchableOpacity>

          <Text style={styles.title}>{t('myAddresses')}</Text>
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.langText}>TR</Text>
          <Switch
            trackColor={{false: Colors.grey, true: Colors.buttonGrey}}
            thumbColor={isEnabled ? Colors.primaryGrey : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.langText}>EN</Text>
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
    paddingHorizontal: horizontalScale(15),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(20),
  },
  backButton: {position: 'absolute', left: 0},
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: moderateScale(10),
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  title: {
    lineHeight: 20,
    textAlign: 'center',
    color: Colors.grey,
    fontSize: 16,
  },
  switchContainer: {
    position: 'absolute',
    right: 0,
    top: verticalScale(70),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5),
  },
  langText: {color: Colors.white, fontWeight: '700'},
});
