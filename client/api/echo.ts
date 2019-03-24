import { sendRequest } from './socket';

import { ISocket } from '../../types';

const echo = <T=any>(data: T) => sendRequest<T>({ type: ISocket.EventType.echo, data });

export {
  echo,
};
