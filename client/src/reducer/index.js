const initialState = {
  basket: [],
  user: null,
  shippingData: {},
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "REMOVE_ITEM":
      const index = state.basket.findIndex(
        (product) => product.id === action.payload
      );
      let newBasket = [...state.basket];
      newBasket.splice(index, 1);
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: action.payload,
      };

    case "SET_SHIPPINGDATA":
      return {
        ...state,
        shippingData: action.payload,
      };

    default:
      return state;
  }
}
