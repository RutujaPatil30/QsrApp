export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';
export const REMOVE_FROM_CART_REQUEST = 'REMOVE_FROM_CART_REQUEST';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAILURE = 'REMOVE_FROM_CART_FAILURE';
export const DELETE_CART_ITEM_REQUEST = 'DELETE_CART_ITEM_REQUEST';
export const DELETE_CART_ITEM_SUCCESS = 'DELETE_CART_ITEM_SUCCESS';
export const DELETE_CART_ITEM_FAILURE = 'DELETE_CART_ITEM_FAILURE';
export const PAYMENT_REQUEST = "PAYMENT_REQUEST";
export const PAYMENT_SUCCESS = "PAYMENT_SUCCESS";
export const PAYMENT_FAILURE = "PAYMENT_FAILURE";
export const ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD';
export const SET_PAYMENT_METHOD = "SET_PAYMENT_METHOD";


export const signup_request = (data: any) => ({
  type: SIGNUP_REQUEST,
  payload: data,
});

export const signup_success = (data: any) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

export const signup_failure = (error: any) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const login_request = (data: any) => ({
  type: LOGIN_REQUEST,
  payload: data,
});

export const login_success = (data: any) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const login_failure = (error: any) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout_request = () => ({
  type: LOGOUT_REQUEST,
});

export const logout_success = (data: any) => ({
  type: LOGOUT_SUCCESS,
  payload: data,
});

export const logout_failure = (error: any) => ({
  type: LOGOUT_FAILURE,
  payload: error,
});

export const add_to_cart_request = ( item: any) => ({
  type: ADD_TO_CART_REQUEST,
  payload: {item},
});

export const add_to_cart_success = ( item: any) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: {item},
});

export const add_to_cart_failure = (error: any) => ({
  type: ADD_TO_CART_FAILURE,
  payload: error,
});

export const remove_from_cart_request = (item: any) => ({
  type: REMOVE_FROM_CART_REQUEST,
  payload: { item},
});

export const remove_from_cart_success = ( item: any) => ({
  type: REMOVE_FROM_CART_SUCCESS,
  payload: { item},
});

export const remove_from_cart_failure = (error: any) => ({
  type: REMOVE_FROM_CART_FAILURE,
  payload: error,
});

export const delete_cart_item_request = (item: any) => ({
  type: DELETE_CART_ITEM_REQUEST,
  payload: {item},
});

export const delete_cart_item_success = (item: any) => ({
  type: DELETE_CART_ITEM_SUCCESS,
  payload: {item},
});

export const delete_cart_item_failure = (error: any) => ({
  type: DELETE_CART_ITEM_FAILURE,
  payload: error,
});

export const payment_request = (data: any) => ({
  type:PAYMENT_REQUEST ,
  payload: data,
});

export const payment_success = (data: any) => ({
  type: PAYMENT_SUCCESS,
  payload: data,
});

export const payment_failure = (error: any) => ({
  type: PAYMENT_FAILURE,
  payload: error,
});

export const addPaymentMethod = (paymentMethod:any) => ({
  type: ADD_PAYMENT_METHOD,
  payload: paymentMethod,
});

export const setPaymentMethod = (method:any) => ({
  type: SET_PAYMENT_METHOD,
  payload: method,
});

