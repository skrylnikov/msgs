import { put } from 'redux-saga/effects';
import { Message } from '../types';
import { updateMessageListSuccess } from '../actions';

function* updateChartListSaga() {

  const messageList: Message[] = [
    {
      messageType: 'text',
      text: 'message1',
      isMyMessage: false,
      author: 'Author1',
    },
    {
      messageType: 'text',
      text: 'message2',
      isMyMessage: true,
      author: 'Author7',
    },
    {
      messageType: 'text',
      text: 'message3',
      isMyMessage: false,
      author: 'Author1',
    },
    {
      messageType: 'text',
      text: 'message4',
      isMyMessage: false,
      author: 'Author2',
    },
  ];

  yield put(updateMessageListSuccess(messageList));

}

export {
  updateChartListSaga,
}