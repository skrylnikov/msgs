import { put, call } from 'redux-saga/effects';
import { SendMessageAction, updateMessageListSuccess } from '../actions';

import { MessageApi, http } from '../../../api';

import { IMessage } from '../../../../types';

import { store } from '../../store';


MessageApi.subscribeMessageUpdate((data) => {
  const state = store.getState();
  store.dispatch(updateMessageListSuccess(data.map((x) => ({ ...x, isMyMessage: state.chat.username === x.author }))));
});

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