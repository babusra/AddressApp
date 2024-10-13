export interface IAddressType {
    addressTitle: string;
    cityName: string;
    districtName: string;
    addressDetail: string;
}

export type FormAction =
| {type: 'SET_ADDRESS_TITLE'; payload: string}
| {type: 'SET_CITY'; payload: string}
| {type: 'SET_DISTRICT'; payload: string}
| {type: 'SET_DETAILS'; payload: string}
| {type: 'RESET'};