import { createStore } from "redux";
import rootReducer from "../Redux/index";

const store = createStore(rootReducer);

export default store;
