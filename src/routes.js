import cors from 'cors';

import express, { Router } from 'express';
import QuestionController from './app/controllers/QuestionController';
import AnswerController from './app/controllers/AnswerController';

const server = express();
const routes = new Router();

server.use(cors());

// routes.get('/groups', GroupController.index);
// routes.get('/groups/:id', GroupController.show);
// routes.post('/groups', GroupController.store);
// routes.put('/groups/:id', GroupController.update);
routes.post('/question', QuestionController.store);
routes.get('/question', QuestionController.index);

routes.post('/answer', AnswerController.store);
routes.get('/answer', AnswerController.index);
// routes.get('/groups/:group_id/users', UserController.index);
// routes.put('/groups/:group_id/users', UserController.update);

// routes.get('/assistance', AssistanceController.index);
// routes.get(
//   '/assistance/meeting/:meeting_id/group/:group_id',
//   AssistanceController.index
// );

export default routes;
