import { takeLatest } from 'redux-saga/effects';

import { ActionChartTypes } from '../actions';
import { updateChartListSaga } from './updateChartList';
import { sendMessageSaga } from './sendMessage';

function* ChatSaga() {
  yield takeLatest(ActionChartTypes.updateMessageList, updateChartListSaga);
  yield takeLatest(ActionChartTypes.sendMessage, sendMessageSaga);
}

export {
  ChatSaga,
}