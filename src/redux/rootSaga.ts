import {all} from 'redux-saga/effects';
import {mainSaga} from './saga';

export default function* rootSaga() {
  yield all([mainSaga()]);
}
