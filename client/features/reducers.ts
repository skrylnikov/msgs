import { combineReducers } from 'redux';

import * as Chat from './chat/reducers';

interface Store {
  chat: Chat.State;
}

const initialStore: Store = {
  chat: Chat.initialState,
};


const reducer = combineReducers<Store>({
  chat: Chat.reducer,
});

export {
  Store,
  initialStore,
  reducer,
}

