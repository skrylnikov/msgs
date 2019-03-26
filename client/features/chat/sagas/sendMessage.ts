import { call } from 'redux-saga/effects';
import { SendMessageAction } from '../actions';

import { MessageApi } from '../../../api';

import { IMessage } from '../../../../types';



function* sendMessageSaga(action: SendMessageAction) {

  yield call(MessageApi.sendMessage, {
    messageType: IMessage.MessageType.text,
    text: action.payload.text,
    author: action.payload.username,
  });
}

export {
  sendMessageSaga,
}