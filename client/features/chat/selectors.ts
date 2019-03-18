import { Store } from '../reducers';


const getMessageList = (store: Store) => store.chat.messageList;


export {
  getMessageList,
};
