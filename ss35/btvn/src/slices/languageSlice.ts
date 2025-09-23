export const translations = {
  en: {
    academy: 'Rikkei Academy',
    language: 'English',
    switchLabel: 'Select Language'
  },
  vi: {
    academy: 'Học viện Rikkei',
    language: 'Tiếng Việt',
    switchLabel: 'Chọn ngôn ngữ'
  }
};

import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: { lang: 'en' },
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;