import cors from 'cors';

import express, { Router } from 'express';

import QuestionController from './app/controllers/QuestionController';
import AnswerController from './app/controllers/AnswerController';

const server = express();
const routes = new Router();

server.use(cors());

routes.post('/question', QuestionController.store);
routes.get('/question', QuestionController.index);

routes.post('/answer', AnswerController.store);
routes.get('/answer', AnswerController.index);

export default routes;
