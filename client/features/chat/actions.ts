import { action } from 'typesafe-actions';

import { Message } from './types';

enum ActionChartTypes {
  sendMessage = '[chat] sendMessage',

  updateMessageList = '[chat] updateMessageList',
  updateMessageListSuccess = '[chat] updateMessageListSuccess',
}

const sendMessage = (text: string) => action(ActionChartTypes.sendMessage, { text });

type SendMessageAction = ReturnType<typeof sendMessage>;

const updateMessageList = () => action(ActionChartTypes.updateMessageList);

type UpdateMessageListAction = ReturnType<typeof updateMessageList>;

const updateMessageListSuccess = (messageList: Message[]) => action(ActionChartTypes.updateMessageListSuccess, { messageList });

type UpdateMessageListSuccessAction = ReturnType<typeof updateMessageListSuccess>;


type ActionType =
  | SendMessageAction
  | UpdateMessageListAction
  | UpdateMessageListSuccessAction
  ;


export {
  ActionType,
  ActionChartTypes,
  sendMessage,
  SendMessageAction,
  updateMessageList,
  UpdateMessageListAction,
  updateMessageListSuccess,
  UpdateMessageListSuccessAction,
};