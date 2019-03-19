import { put, call, select } from 'redux-saga/effects';
import { updateMessageListSuccess } from '../actions';

import { MessageApi, http } from '../../../api';

import { Message } from '../types';
import { Store } from '../../reducers';

function* updateChartListSaga() {

  const store: Store = yield select();

  const messageListResponse: MessageApi.ResponseList = yield call(MessageApi.list);

  if (http.isError(messageListResponse)) {
    console.error(messageListResponse);
    return;
  }

  const messageList: Message[] = messageListResponse.body.map((x) => ({
    ...x,
    isMyMessage: store.chat.username === x.author,
  }));

  yield put(updateMessageListSuccess(messageList));

}

export {
  updateChartListSaga,
}