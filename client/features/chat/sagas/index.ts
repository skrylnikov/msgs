import { takeLatest } from 'redux-saga/effects';

import { ActionChartTypes } from '../actions';
import { sendMessageSaga } from './sendMessage';

function* ChatSaga() {
  yield takeLatest(ActionChartTypes.sendMessage, sendMessageSaga);
}

export {
  ChatSaga,
}