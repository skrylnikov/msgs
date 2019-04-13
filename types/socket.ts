import { Block } from './block';

export enum EventType {
  'echo' = -1,
  'status' = 0,
  'newBlock' = 1,
  'blockList' = 2,
  'newUserBlock' = 3,
  'userBlockList' = 4,
}

export interface EchoEvent<Data=any> {
  type: EventType.echo;
  data: Data;
  corr?: string | null;
}

export interface NewBlockEvent {
  type: EventType.newBlock;
  data: Block;
  corr?: string | null;
}

export interface BlockListEvent {
  type: EventType.blockList;
  data: Block[];
  corr?: string | null;
}

export interface NewUserBlockEvent {
  type: EventType.newUserBlock;
  data: Block;
  corr?: string | null;
}

export interface UserBlockListEvent {
  type: EventType.userBlockList;
  data: Block[];
  corr?: string | null;
}



export type Events = EchoEvent | NewBlockEvent | BlockListEvent | NewUserBlockEvent | UserBlockListEvent;
