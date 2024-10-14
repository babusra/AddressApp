import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LanguageState {
  language: string;
  isEnabled: boolean;
}

const initialState: LanguageState = {
  language: 'tr',
  isEnabled: false,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setIsEnabled: (state, action) => {
      state.isEnabled = action.payload;
    },
  },
});

export const {setLanguage, setIsEnabled} = languageSlice.actions;
export default languageSlice.reducer;
