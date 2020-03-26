import { Router } from 'express';

import UserController from './controllers/UserController';
import OngsController from './controllers/OngsController';
import IncidentController from './controllers/IncidentController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

const routes = Router();

/** LOGIN Routes*/

routes.post('/sessions', SessionController.store)

routes.get('/users', UserController.index)
routes.post('/users', UserController.create);

/** ONGS Routes */

routes.get('/ongs', OngsController.index)
routes.post('/ongs', OngsController.create)

/** INCIDENTS Routes */

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

/** PROFILE Routes */

routes.get('/profile', ProfileController.index)


export default routes;