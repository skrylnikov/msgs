import { Express } from 'express';
import cors from 'cors';
import { raw } from 'body-parser';

import { msgpackMiddleware } from './msgpack';

const middlewareList = [
  cors(),
  raw(),
  msgpackMiddleware,
];

const applyMiddleware = (app: Express) => {
  middlewareList.forEach((middleware) => {
    app.use(middleware);
  });
};

export {
  applyMiddleware,
};


