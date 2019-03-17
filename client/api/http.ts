import Msgpack from 'msgpack5';

const msgpack = Msgpack();


interface SuccessResult<T = any> {
  error: false;
  status: number;
  text: string;
  body: T;
}

interface ErrorResult {
  error: false;
  status: number;
  text: string;
  body: {
    message: string;
  };
}

type Result<T = any> = SuccessResult<T> | ErrorResult;

const isError = <T>(result: Result<T>): result is ErrorResult => result.error;

const uri = 'http://127.0.0.1:4000';

const get = <T = any>(url: string): Promise<Result<T>> => fetch(`${uri}/${url}`, {
  method: 'GET',
  headers: {
    'Content-type': 'application/octet-stream',
  },
}).then(async (x) => x.status >= 400 ? ({
  error: true,
  status: x.status,
  text: x.statusText,
  body: await x.arrayBuffer().then((y) => msgpack.decode(y as any)).catch((_) => ({})),
}) : x.arrayBuffer().then((y) => msgpack.decode(y as any)).then((body) => ({
  error: false,
  status: x.status,
  text: null,
  body,
})).catch((_) => ({
  error: true,
  status: x.status,
  text: 'Error parse message',
  body: {},
}))) as any;

const post = <T = any>(url: string, data: any): Promise<Result<T>> => fetch(`${uri}/${url}`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/octet-stream',
  },
  body: msgpack.encode(data) as any,
}).then(async (x) => x.status >= 400 ? ({
  error: true,
  status: x.status,
  text: x.statusText,
  body: await x.arrayBuffer().then((y) => msgpack.decode(y as any)).catch((_) => ({})),
}) : x.arrayBuffer().then((y) => msgpack.decode(y as any)).then((body) => ({
  error: false,
  status: x.status,
  text: null,
  body,
})).catch((_) => ({
  error: true,
  status: x.status,
  text: 'Error parse message',
  body: {},
}))) as any;

export {
  isError,
  post,
  get,
}

