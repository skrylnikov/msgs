import { EventEmitter } from 'events';
import { IApi, IMessage } from '../../types';


type EventData = IMessage.Message[];

class Poll extends EventEmitter {
  private static _poll = new Poll();
  public static get poll() {
    return this._poll;
  }

  public send(type: IApi.EventType.updateMessageList, data: IMessage.Message[]): void
  public send(type: IApi.EventType, data: EventData) {
    this.emit(IApi.EventType[type], data);
  }

  public subscribe(type: IApi.EventType.updateMessageList, func: (data: IMessage.Message[]) => void): void
  public subscribe(type: IApi.EventType, func: (data: EventData) => void) {
    this.on(IApi.EventType[type], func);
  }
}

export {
  Poll,
}
