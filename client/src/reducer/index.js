const initialState = {
  basket: [],
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    
    case "REMOVE_ITEM":
      const index = state.basket.findIndex(product => product.id === action.payload)
      let newBasket = [...state.basket]
      newBasket.splice(index, 1)
      return {
        ...state,
        basket: newBasket
      }

    default:
      return state;
  }
}
