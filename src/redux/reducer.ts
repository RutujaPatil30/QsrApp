//@ts-nocheck
import {combineReducers} from 'redux';
import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  DELETE_CART_ITEM_FAILURE,
  DELETE_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  PAYMENT_FAILURE,
  ADD_PAYMENT_METHOD,
  SET_PAYMENT_METHOD,
} from './action';

const initialState = {
  loading: false,
  users: [],
  isLogin: false,
  currentUser: null,
  cartItems: [],
  error: '',
  paymentStatus: null,
  paymentDetails: null,
  paymentMethods: [],
  paymentMethod: null
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        isLogin: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        isLogin: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isLogin: false,
        error: action.error,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: action.payload,
        currentUser: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        isLogin: null,
        error: action.error,
      };
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      let myindex = -1;
      state.cartItems.map((item, index) => {
        if (
          item.id === action.payload.item.id 
          
        ) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.cartItems.push({
          id: action.payload.item.id,
          image: action.payload.item.image,
          title: action.payload.item.title,
          price: action.payload.item.price,
          description: action.payload.item.description,
          qty: action.payload.item.qty + 1,
        });
      } else {
        state.cartItems[myindex].qty = state.cartItems[myindex].qty + 1;
      }
      return {
        ...state,
        loading: false,
        cartItems: [...state.cartItems],
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case REMOVE_FROM_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_FROM_CART_SUCCESS:
      let startingIndex = -1;
      state.cartItems.map((item, index) => {
        if (
          item.id === action.payload.item.id 
        ) {
          startingIndex = index;
        }
      });
      if (startingIndex == -1) {
      } else {
        state.cartItems[startingIndex].qty =
          state.cartItems[startingIndex].qty - 1;
      }
      return {
        ...state,
        loading: false,
        cartItems: [...state.cartItems],
      };
    case REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case DELETE_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CART_ITEM_SUCCESS:
      const updatedCartItems = state.cartItems.filter(
        item =>
          item.id !== action.payload.item.id 
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    case DELETE_CART_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case PAYMENT_REQUEST:
      return{
        ...state,
        loading: true,
      }
    case PAYMENT_SUCCESS:
      return {
        ...state,
        paymentStatus: 'success',
        paymentDetails: action.payload, 
      };
    case PAYMENT_FAILURE:
      return{
        ...state,
        loading: false,
        error: action.error,
      }
    case ADD_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethods: [...state.paymentMethods, action.payload],
        paymentMethod: action.payload,
      };
    case SET_PAYMENT_METHOD:
        return {
          ...state,
          paymentMethod: action.payload,
        };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer: reducer,
});

export default rootReducer;
