import {put, takeLatest} from 'redux-saga/effects';
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
} from './action';

function* signupfn(action: any) {
  try {
    yield put({type: SIGNUP_SUCCESS, payload: action.payload});
  } catch (error) {
    yield put({type: SIGNUP_FAILURE, payload: error});
  }
}

function* loginfn(action: any) {
  try {
    yield put({type: LOGIN_SUCCESS, payload: action.payload});
  } catch (error) {
    yield put({type: LOGIN_FAILURE, payload: error});
  }
}

function* logoutfn() {
  try {
    yield put({type: LOGOUT_SUCCESS, payload: false});
  } catch (error) {
    yield put({type: LOGOUT_FAILURE, payload: error});
  }
}

function* addToCartfn(action: any) {
  try {
    yield put({type: ADD_TO_CART_SUCCESS, payload: action.payload});
  } catch (error) {
    yield put({type: ADD_TO_CART_FAILURE, payload: error});
  }
}

function* removeFromCartfn(action: any) {
  try {
    yield put({type: REMOVE_FROM_CART_SUCCESS, payload: action.payload});
  } catch (error) {
    yield put({type: REMOVE_FROM_CART_FAILURE, payload: error});
  }
}

function* deleteCartItemfn(action: any) {
  try {
    yield put({type: DELETE_CART_ITEM_SUCCESS, payload: action.payload});
  } catch (error) {
    yield put({type: DELETE_CART_ITEM_FAILURE, payload: error});
  }
}

function* paymentfn(action: any) {
  try {
    yield put({type:PAYMENT_SUCCESS , payload: action.payload});
  } catch (error) {
    yield put({type:PAYMENT_FAILURE, payload: error});
  }
}


export function* mainSaga() {
  yield takeLatest(SIGNUP_REQUEST, signupfn);
  yield takeLatest(LOGIN_REQUEST, loginfn);
  yield takeLatest(ADD_TO_CART_REQUEST, addToCartfn);
  yield takeLatest(REMOVE_FROM_CART_REQUEST, removeFromCartfn);
  yield takeLatest(DELETE_CART_ITEM_REQUEST, deleteCartItemfn);
  yield takeLatest(LOGOUT_REQUEST, logoutfn);
  yield takeLatest(PAYMENT_REQUEST, paymentfn);
}
