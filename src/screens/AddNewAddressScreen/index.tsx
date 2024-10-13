import React, {useEffect, useReducer, useState} from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import {moderateScale} from '../../constants/Dimensions';
import {Colors} from '../../constants/Colors';
import CustomButton from '../../components/CustomButton';
import {navigation} from '../../navigation/rootNavigation';
import {TextInput} from 'react-native-paper';
import CustomBottomSheet from '../../components/CustomBottomSheet';
import {styles} from './styles';

interface FormState {
  addressTitle: string;
  city: string;
  details: string;
}

type FormAction =
  | {type: 'SET_ADDRESS_TITLE'; payload: string}
  | {type: 'SET_CITY'; payload: string}
  | {type: 'SET_DETAILS'; payload: string}
  | {type: 'RESET'};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_ADDRESS_TITLE':
      return {...state, addressTitle: action.payload};
    case 'SET_CITY':
      return {...state, city: action.payload};
    case 'SET_DETAILS':
      return {...state, details: action.payload};
    case 'RESET':
      return {addressTitle: '', city: '', details: ''};
    default:
      return state;
  }
};

const AddNewAddressScreen: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, {
    addressTitle: '',
    city: '',
    details: '',
  });

  const [visible, setVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const isFormValid =
      state.addressTitle.trim() !== '' &&
      state.city.trim() !== '' &&
      state.details.trim() !== '';

    setIsButtonDisabled(!isFormValid);
  }, [state]);

  return (
    <View style={styles.container}>
      <Header
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.formContainer}>
        <TextInput
          label="Adres başlığı (Ev, işyeri vs.)"
          value={state.addressTitle}
          onChangeText={text =>
            dispatch({type: 'SET_ADDRESS_TITLE', payload: text})
          }
          style={styles.input}
          underlineColor={Colors.underLine}
        />
        <TextInput
          label="İl"
          value={state.city}
          onChangeText={text => dispatch({type: 'SET_CITY', payload: text})}
          style={styles.input}
          underlineColor={Colors.underLine}
          right={
            <TextInput.Icon
              icon="chevron-down"
              size={30}
              onPress={() => setVisible(true)}
            />
          }
        />

        <CustomBottomSheet
          visible={visible}
          toggleBottomNavigationView={() => setVisible(!visible)}
          content={
            <View
              style={{
                backgroundColor: Colors.white,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: moderateScale(20),
              }}></View>
          }
        />

        <TextInput
          label="Adres Detayı"
          value={state.details}
          onChangeText={text => dispatch({type: 'SET_DETAILS', payload: text})}
          style={styles.input}
          underlineColor={Colors.underLine}
        />
      </View>
      <CustomButton
        title={'Kaydet'}
        containerStyle={styles.buttonCont}
        onPress={() => {
          console.log('***', state);
        }}
        disabled={isButtonDisabled}
      />
    </View>
  );
};

export default AddNewAddressScreen;
