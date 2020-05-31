import { Request } from 'express';

export interface HttpRequest extends Request {
  requestUrl: Array<string>;
}
