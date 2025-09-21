const initialState: any[] = [];

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }

    case 'REMOVE_FROM_CART': {
      return state.filter((item) => item.id !== action.payload);
    }

    case 'DECREASE_QUANTITY': {
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    }

    default:
      return state;
  }
};