import { Router, IResponse, IRequest } from '../types/express';

import { IMessage, IApi } from '../../types';

import { Poll } from '../shared';
import { EventType } from '../../types/api';

const router = Router();

const messageList: IMessage.Message[] = [];

router.get('/', (req, res: IResponse) => {
  console.log(messageList);
  res.sendMsg(messageList);
});

interface Body {
  message: IMessage.Message;
}


router.post('/', (req: IRequest<Body>, res: IResponse) => {
  console.log(req.body.message);
  messageList.push({
    ...req.body.message,
    id: messageList.length,
  });

  Poll.poll.send(EventType.updateMessageList, messageList);

  res.sendMsg({ status: IApi.Status.ok });
});

export default router;