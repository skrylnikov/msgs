import { Express } from './types/express';

import { applyMiddleware } from './middleware';

import { applyRoutes } from './controllers';


const app = Express();

applyMiddleware(app);

applyRoutes(app);

app.listen(4000);

console.log('start');
