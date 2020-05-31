import { Response, NextFunction } from 'express';
import { HttpRequest } from '@interfaces/http';
import envConfig from '@configs/env';

const { OMDB_API_KEY, OMDB_API_URL } = envConfig;

const queryParams = (req: HttpRequest, res: Response, next: NextFunction) => {
  // req.requestUrl = `${req.requestUrl}/?apikey=${OMDB_API_KEY}`;
  next();
}

export {
  queryParams
}
