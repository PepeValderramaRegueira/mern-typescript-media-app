import { Response, NextFunction } from 'express';
import { HttpRequest } from '@interfaces/http';

const saveBaseUrlInRequest = (url: string) => {
  return (req: HttpRequest, res: Response, next: NextFunction) => {
    req.requestUrl.push(url);
    next();
  }
}

const saveApiKeyInBaseUrl = (apiKeyQueryName: string, apiKeyValue: string) => {
  return (req: HttpRequest, res: Response, next: NextFunction) => {
    req.requestUrl.push(`?${apiKeyQueryName}=${apiKeyValue}`);
    next();
  }
}

export {
  saveBaseUrlInRequest,
  saveApiKeyInBaseUrl
}
