import { Router, Express } from 'express';

import Echo, { echo } from './echo';
import Status from './status';
import Message from './message';
import Poll from './poll';

import { ISocket } from '../../types';


const routes = {
  '/echo': Echo,
  '/status': Status,
  '/message': Message,
  '/poll': Poll,
};


const setRoutes = (routsList: { [x: string]: Router }, mainRout: Router) => {
  for (const rout in routsList) {
    mainRout.use(rout, routsList[rout]);
  }
};

const applyRoutes = (app: Express) => {
  setRoutes(routes, app);
};

const controllerMap = new Map([
  [ISocket.EventType.echo, echo],
]);

export {
  setRoutes,
  applyRoutes,
  controllerMap,
}