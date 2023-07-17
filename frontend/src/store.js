import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
} from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducer";
import { orderCreateReducer } from "./reducers/orderReducer";

// Shipping Address
let shippingAddressFromStorage;
try {
  shippingAddressFromStorage =
    JSON.parse(localStorage.getItem("shippingAddress")) || {};
} catch (error) {
  shippingAddressFromStorage = {};
}

// User GetItems Through localStorage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Cart GetItems Through localStorage
let cartItemsFromStorage;
try {
  cartItemsFromStorage = JSON.parse(localStorage.getItem("cartItems")) || [];
} catch (error) {
  cartItemsFromStorage = [];
}

// Fetch Action Methods
const reducer = combineReducers({
  productsList: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  updateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
});
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

// Store Object
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
