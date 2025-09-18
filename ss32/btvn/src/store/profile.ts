const initialState = {
  id: 1,
  userName: 'Nguyễn Văn Nam',
  gender: 'Nam',
  dateBirth: '20/03/2023',
  address: 'Thanh Xuân, Hà Nội',
};

export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};