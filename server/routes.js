/**
 * Created by babad on 7/2/2017.
 */
import express from 'express';

import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';

const routes = express();

// Basic routes
routes.get('/', basicController.get);
routes.get('/flush', postController.flush);

// User Routes
routes.post('/signup', userController.post);

// Post Routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

// Comment Routes
routes.post('/comment', commentController.post);
export default routes;