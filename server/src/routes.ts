import express from 'express';
import Classes from './controllers/Classes';
import Connections from './controllers/Connections';


const routes = express.Router();
const classesControllers = new Classes();
const connectionsControllers = new Connections();

routes.post( '/classes',  classesControllers.create );
routes.get( '/classes',  classesControllers.index );

routes.post( '/connections', connectionsControllers.create );
routes.get( '/connections', connectionsControllers.index );

export default routes;