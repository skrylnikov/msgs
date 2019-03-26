import { action } from 'typesafe-actions';

import { Message } from './types';

enum ActionChartTypes {
  sendMessage = '[chat] sendMessage',
}

const sendMessage = (text: string, username: string) => action(ActionChartTypes.sendMessage, { text, username });

type SendMessageAction = ReturnType<typeof sendMessage>;


type ActionType =
  | SendMessageAction
  ;


export {
  ActionType,
  ActionChartTypes,
  sendMessage,
  SendMessageAction,
};