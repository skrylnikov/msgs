import { ISocket } from '../types';

export const subscribeConnectSet = new Set<() => ISocket.Events>();

export const subscribeConnect = (func: () => ISocket.Events) => {
  subscribeConnectSet.add(func);
}