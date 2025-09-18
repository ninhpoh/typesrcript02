const initialState = {
  company: 'Rikkei Academy',
};

export const companyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'CHANGE_COMPANY':
      return { company: 'RikkeiSoft' };
    default:
      return state;
  }
};