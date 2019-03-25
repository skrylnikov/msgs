import { ISocket } from '../../types';

interface Options {
  sendAll: (message: ISocket.Events) => void;
}

export {
  Options,
}