import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAddressList} from '../../services/api/addressApi';
import { IAddressType } from '../../types/IAddressType';

interface AddressState {
  addresses: IAddressType[];
  loading: boolean;
  error: string | null;
}

const initialState: AddressState = {
  addresses: [],
  loading: false,
  error: null,
};

export const fetchAddressList = createAsyncThunk(
  'address/fetchAddressList',
  async () => {
    const response = await getAddressList();
    return response;
  },
);

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAddressList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddressList.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
      })
      .addCase(fetchAddressList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed';
      });
  },
});

export default addressSlice.reducer;
