import { Router, Express } from 'express';

import Echo from './echo';
import Status from './status';


const routes = {
  '/echo': Echo,
  '/status': Status,
};


const setRoutes = (routsList: { [x: string]: Router }, mainRout: Router) => {
  for (const rout in routsList) {
    mainRout.use(rout, routsList[rout]);
  }
};

const applyRoutes = (app: Express) => {
  setRoutes(routes, app);
};

export {
  setRoutes,
  applyRoutes,
}