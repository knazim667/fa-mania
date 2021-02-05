import { PRODUCTS } from "../../utils/data";
const INITIAL_STATE = {
  products: PRODUCTS,
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
