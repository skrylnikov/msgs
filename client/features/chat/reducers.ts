import { ActionType, ActionChartTypes } from './actions';
import { Message } from './types';

interface State {
  messageList: Message[];
  username: string;
}

const initialState: State = {
  messageList: [],
  username: localStorage.getItem('username') || '',
};

const reducer = (state: State = initialState, action: ActionType) => {
  switch (action.type) {
    case ActionChartTypes.updateMessageListSuccess: {

      return {
        ...state,
        messageList: action.payload.messageList,
      };
    }

    case ActionChartTypes.sendMessage: {
      return {
        ...state,
        username: action.payload.username,
      };
    }

    default: {
      return state;
    }
  }
}

export {
  State,
  initialState,
  reducer,
}