import { takeLatest } from 'redux-saga/effects';

import { ActionChartTypes } from '../actions';
import { updateChartListSaga } from './updateChartList';

function* ChatSaga() {
  yield takeLatest(ActionChartTypes.updateMessageList, updateChartListSaga);
}

export {
  ChatSaga,
}