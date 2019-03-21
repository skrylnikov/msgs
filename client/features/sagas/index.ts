import { fork } from 'redux-saga/effects';
import { ChatSaga } from '../chat/sagas';
import { pollSaga } from './poll';


function* rootSaga() {
  yield fork(ChatSaga);
  yield fork(pollSaga);
}


export {
  rootSaga,
}
