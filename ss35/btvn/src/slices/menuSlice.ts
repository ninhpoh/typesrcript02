import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: { collapsed: false },
  reducers: {
    toggleMenu: (state) => {
      state.collapsed = !state.collapsed;
    }
  }
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;