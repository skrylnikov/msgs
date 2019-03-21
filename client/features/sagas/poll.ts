import { call, delay, select, put } from 'redux-saga/effects';

import { poll, ResponsePoll, http } from '../../api';
import { EventType } from '../../../types/api';

import { updateMessageListSuccess } from '../chat/actions';
import { Message } from '../chat/types';

import { Store } from '../reducers';


function* pollSaga() {

  while (true) {
    try {

      const pollResponse: ResponsePoll = yield call(poll);

      if (http.isError(pollResponse)) {
        yield delay(10000);
        continue;
      }

      const response = pollResponse.body;

      console.log(response);
      const store: Store = yield select();

      switch (response.type) {
        case EventType.updateMessageList: {
          const messageList: Message[] = response.data.map((x) => ({
            ...x,
            isMyMessage: store.chat.username === x.author,
          }));
          yield put(updateMessageListSuccess(messageList));
          console.log(response.data);
          break;
        }
        default:
          break;
      }
    } catch (e) {
      console.log(e);
      yield delay(10000);
    }
  }

}


export {
  pollSaga,
}
