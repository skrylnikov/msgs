import { Express, IResponse, IRequest } from './types/express';
import Msgpack from 'msgpack5';

import { applyMiddleware } from './middleware';


const app = Express();

applyMiddleware(app);

app.get('/', (req, res) => {

  res.send(msgpack.encode({
    message: 'kek',
  }));
});


app.post('/', (req: IRequest, res: IResponse) => {

  console.log('post request');

  const body = req.body;

  console.log(body);
  res.sendMsg({
    message: 'kek1',
  });

});

app.listen(4000);

const msgpack = Msgpack();

const data = msgpack.encode({
  hello: 'world',
  kek: 5,
});

console.log(data);

const result = msgpack.decode(data);

console.log(result);

