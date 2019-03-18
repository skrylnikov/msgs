import { ActionType, ActionChartTypes } from './actions';
import { Message } from './types';

interface State {
  messageList: Message[];
}

const initialState: State = {
  messageList: [],
};

const reducer = (state: State = initialState, action: ActionType) => {
  switch (action.type) {
    case ActionChartTypes.updateMessageListSuccess: {

      return {
        ...state,
        messageList: action.payload.messageList,
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