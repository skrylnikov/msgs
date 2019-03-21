import { Router, IResponse } from '../types/express';

import { Poll } from '../shared';
import { EventType } from '../../types/api';

const router = Router();

interface Connection {
  res: IResponse;
  timeout: number;
}

const connectionSet = new Set<Connection>();

Poll.poll.subscribe(EventType.updateMessageList, (data) => {
  console.log('poll');
  console.log(connectionSet.size);
  connectionSet.forEach(({ res, timeout }) => {
    res.sendMsg({
      type: EventType.updateMessageList,
      data,
    });
    clearTimeout(timeout);
  });

  connectionSet.clear();
});

router.post('/', (req, res: IResponse) => {

  const connection = {
    res,
    timeout: setTimeout(() => {
      connectionSet.delete(connection);
      res.send({
        type: EventType.notUpdate,
      });
    }, 10000),
  }

  connectionSet.add(connection);

});

export default router;