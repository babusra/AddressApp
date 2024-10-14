import {useReducer, useState, useEffect} from 'react';
import {navigation} from '../../navigation/rootNavigation';
import {postAddress} from '../../services/api/addressApi';
import {getCities} from '../../services/api/cityApi';
import useFetch from '../../services/hooks/useFetch';
import {IAddressType, FormAction} from '../../types/IAddressType';
import {isFormValid} from '../../utils/FormValidation';
import {useTranslation} from 'react-i18next';

const UseAddressFormManager = () => {
  const formReducer = (
    state: IAddressType,
    action: FormAction,
  ): IAddressType => {
    switch (action.type) {
      case 'SET_ADDRESS_TITLE':
        return {...state, addressTitle: action.payload};
      case 'SET_CITY':
        return {...state, cityName: action.payload};
      case 'SET_DISTRICT':
        return {...state, districtName: action.payload};
      case 'SET_DETAILS':
        return {...state, addressDetail: action.payload};
      case 'RESET':
        return {
          addressTitle: '',
          cityName: '',
          districtName: '',
          addressDetail: '',
        };
      default:
        return state;
    }
  };
  const {t} = useTranslation();


  const [state, dispatch] = useReducer(formReducer, {
    addressTitle: '',
    cityName: '',
    districtName: '',
    addressDetail: '',
  });
  const {data, loading, error} = useFetch(getCities);

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [errors, setErrors] = useState({
    addressTitle: false,
    cityName: false,
    districtName: false,
    addressDetail: false,
  });
  const onSave = async () => {
    await postAddress(state);
    setVisible2(true);

    setTimeout(() => {
      setVisible2(false);
      navigation.goBack();
    }, 5000);
  };

  useEffect(() => {
    const valid = isFormValid(state);

    setIsButtonDisabled(!valid);
  }, [state]);
  return {
    formReducer,
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
  };
};

export default UseAddressFormManager;
