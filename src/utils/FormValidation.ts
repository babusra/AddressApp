import {IAddressType} from '../types/IAddressType';

export const isFormValid = (state: IAddressType) => {
  return (
    state.addressTitle.trim() !== '' &&
    state.cityName.trim() !== '' &&
    state.districtName.trim() !== '' &&
    state.addressDetail.trim() !== ''
  );
};
