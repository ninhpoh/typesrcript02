const initialState = [
  {
    id: 1,
    userName: 'Nguyễn Văn A',
    gender: 'Nam',
    dateBirth: '20/11/2023',
    address: 'Thanh Xuân, Hà Nội',
  },
  {
    id: 2,
    userName: 'Nguyễn Thị B',
    gender: 'Nữ',
    dateBirth: '20/11/2023',
    address: 'Cầu Giấy, Hà Nội',
  },
];

type Action= {
  type: string,
  payload?: unknown
}
export const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};