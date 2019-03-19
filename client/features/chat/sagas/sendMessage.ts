import { put, call } from 'redux-saga/effects';
import { SendMessageAction, updateMessageList } from '../actions';

import { MessageApi, http } from '../../../api';

import { IMessage } from '../../../../types';


function* sendMessageSaga(action: SendMessageAction) {

  const sendMessageResponse: MessageApi.ResponseList = yield call(MessageApi.send, {
    messageType: IMessage.MessageType.text,
    text: action.payload.text,
    author: action.payload.username,
  });

  if (http.isError(sendMessageResponse)) {
    console.error(sendMessageResponse);
    return;
  }

  console.log(sendMessageResponse);

  yield put(updateMessageList());

}

export {
  sendMessageSaga,
}