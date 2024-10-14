import {configureStore} from '@reduxjs/toolkit';
import addressReducer from './features/addressSlice';
import languageReducer from './features/languageSlice';

const store = configureStore({
  reducer: {
    address: addressReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
