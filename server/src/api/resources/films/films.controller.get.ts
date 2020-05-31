import { Request, Response, NextFunction } from 'express';
import { HttpRequest } from '@interfaces/http';

const getPaginatedFilmsBySearch = async (
  req: HttpRequest, res: Response, next: NextFunction
): Promise<Response | void> => {
  return res.status(200).send(req.requestUrl);
}

export {
  getPaginatedFilmsBySearch
}
