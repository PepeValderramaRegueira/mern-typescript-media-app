import { Router } from 'express';
import filmsRouter from '@films/films.routes'

const api = (router: Router): Router => {
  router.use('/api/films', filmsRouter);
  return router;
}

export { api };
