import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import {Colors} from '../../constants/Colors';
import CustomButton from '../../components/CustomButton';
import {navigation} from '../../navigation/rootNavigation';
import {TextInput} from 'react-native-paper';
import CustomBottomSheet from '../../components/CustomBottomSheet';
import {styles} from './styles';
import SuccessBottomSheet from '../../contents/SuccessBottomSheet';
import CitiesBottomSheet from '../../contents/CitiesBottomSheet';
import UseAddressFormManager from './UseAddressFormManager';

const AddNewAddressScreen: React.FC = () => {
  const {
    data,
    state,
    onSave,
    dispatch,
    errors,
    visible,
    setVisible,
    visible2,
    setVisible2,
    isButtonDisabled,
    setErrors,
    t,
  } = UseAddressFormManager();

  return (
    <View style={styles.container}>
      <Header
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.formContainer}>
        <TextInput
          label={t('addressTitle')}
          value={state.addressTitle}
          onChangeText={text => {
            dispatch({type: 'SET_ADDRESS_TITLE', payload: text});
            setErrors({
              ...errors,
              addressTitle: text === '' ? true : false,
            });
          }}
          error={errors.addressTitle}
          onBlur={() => {
            setErrors({
              ...errors,
              addressTitle: state.addressTitle.trim() === '' ? true : false,
            });
          }}
          style={{...styles.input, marginBottom: errors.addressTitle ? 0 : 20}}
          underlineColor={Colors.underLine}
        />
        {errors.addressTitle ? (
          <Text style={styles.errorText}>
            {t('addressTitle')}{' '}
            {t('errorDes')}
          </Text>
        ) : null}

        <TextInput
          label={t('city')}
          value={state.cityName}
          editable={false}
          onChangeText={text => {
            dispatch({type: 'SET_CITY', payload: text});
            setErrors({
              ...errors,
              cityName: text === '' ? true : false,
            });
          }}
          right={
            <TextInput.Icon
              icon="chevron-down"
              size={30}
              onPress={() => setVisible(true)}
            />
          }
          error={errors.cityName}
          onBlur={() => {
            setErrors({
              ...errors,
              cityName: state.cityName.trim() === '' ? true : false,
            });
          }}
          style={{...styles.input, marginBottom: 20}}
          underlineColor={Colors.underLine}
        />
        {errors.cityName ? (
          <Text style={styles.errorText}>
            {t('city')}
            {t('errorDes')}
          </Text>
        ) : null}
        <TextInput
          label={t('district')}
          value={state.districtName}
          onChangeText={text => {
            dispatch({type: 'SET_DISTRICT', payload: text});
            setErrors({
              ...errors,
              districtName: text === '' ? true : false,
            });
          }}
          error={errors.districtName}
          onBlur={() => {
            setErrors({
              ...errors,
              districtName: state.districtName.trim() === '' ? true : false,
            });
          }}
          style={{...styles.input, marginBottom: errors.districtName ? 0 : 20}}
          underlineColor={Colors.underLine}
        />
        {errors.districtName ? (
          <Text style={styles.errorText}>
            {t('district')}{' '}
            {t('errorDes')}
          </Text>
        ) : null}

        <CustomBottomSheet
          visible={visible}
          toggleBottomNavigationView={() => setVisible(!visible)}
          content={
            <CitiesBottomSheet
              data={data}
              onPress={item => {
                dispatch({type: 'SET_CITY', payload: item.cityName});
                setVisible(false);
              }}
            />
          }
        />

        <TextInput
          label={t('addressDetail')}
          value={state.addressDetail}
          onChangeText={text => {
            dispatch({type: 'SET_DETAILS', payload: text});
            setErrors({
              ...errors,
              addressDetail: text === '' ? true : false,
            });
          }}
          error={errors.addressDetail}
          onBlur={() => {
            setErrors({
              ...errors,
              addressDetail: state.addressDetail.trim() === '' ? true : false,
            });
          }}
          style={{...styles.input, marginBottom: errors.addressDetail ? 0 : 20}}
          underlineColor={Colors.underLine}
        />
        {errors.addressDetail ? (
          <Text style={styles.errorText}>
              {t('addressDetail')}{' '}
            {t('errorDes')}
          </Text>
        ) : null}
      </View>
      <CustomButton
        title={t('save')}
        containerStyle={styles.buttonCont}
        onPress={onSave}
        disabled={isButtonDisabled}
      />
      <CustomBottomSheet
        visible={visible2}
        toggleBottomNavigationView={() => setVisible2(!visible2)}
        content={<SuccessBottomSheet />}
      />
    </View>
  );
};

export default AddNewAddressScreen;
