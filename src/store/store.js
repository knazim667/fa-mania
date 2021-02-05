import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { productReducer } from "../reducers/productReducer/productReducers";

const middleware = [logger];

const store = createStore(productReducer, applyMiddleware(...middleware));

export default store;
