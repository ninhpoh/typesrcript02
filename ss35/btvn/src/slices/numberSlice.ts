import { createSlice } from '@reduxjs/toolkit';

const getRandomList = () => {
  const length = Math.floor(Math.random() * 5) + 3;
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
};

const numberSlice = createSlice({
  name: 'numbers',
  initialState: { list: [] as number[] },
  reducers: {
    generateList: (state) => {
      state.list = getRandomList();
    }
  }
});

export const { generateList } = numberSlice.actions;
export default numberSlice.reducer;