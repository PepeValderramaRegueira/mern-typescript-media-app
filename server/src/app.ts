import dotenv from 'dotenv';
import express, { Application, Router } from 'express';
// import 'module-alias/register';
import { api } from './api';

dotenv.config();
const router = Router();
const app: Application = express();
app.use('/', api(router));

export default app;
