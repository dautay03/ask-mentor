import { legacy_createStore as createStore } from "redux";
import reducer from "./reuducer";
import { composeWithDevTools } from "redux-devtools-extension";
let compoehencer = composeWithDevTools();
let store = createStore(reducer, compoehencer);

export default store;
