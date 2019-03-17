import Express, { Request, Response, NextFunction, Router } from 'express';

interface IRequest<Body=any> extends Request {
  body: Body;
}

interface IResponse extends Response {
  sendMsg?: (data: any) => void;
}

interface INext extends NextFunction { }

export {
  IRequest,
  IResponse,
  INext,
  Express,
  Router,
}