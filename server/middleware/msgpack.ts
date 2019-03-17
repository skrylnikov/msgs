import Msqpack from 'msgpack5';
import { Request, Response, NextFunction } from 'express';

const msgpack = Msqpack();

const msgpackMiddleware = (req: Request, response: Response, next: NextFunction) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    if (req.body) {
      try {
        req.body = msgpack.decode(req.body);
      } catch (e) {
        console.error(e);
        req.body = undefined;
      }
    }
  }

  (response as any).sendMsg = (data: any) => {
    response.send(msgpack.encode(data));
  };

  next();
};

export {
  msgpackMiddleware,
};