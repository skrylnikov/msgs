import { fork } from 'redux-saga/effects';
import { ChatSaga } from '../chat/sagas';


function* rootSaga() {
  yield fork(ChatSaga);
}


export {
  rootSaga,
}
