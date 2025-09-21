const initialState = {
  count: 0,
};

type Action ={
  type: any,
  payload: unknown,
}

export const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};