import { createStore } from "redux";
import productReducer from "./Reducer/productReducer";

const store = createStore(productReducer);

export default store;