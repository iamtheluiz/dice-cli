import express from 'express';

// Controllers
import RollController from './controllers/RollController';
import HomeController from './controllers/HomeController';
import RoomController from './controllers/RoomController';

const routes = express.Router();

// Views
routes.get('/', HomeController.index);
routes.get('/room/:id', RoomController.index);
routes.post('/room', RoomController.createRoom);

// API Routes
routes.get('/api', (request, response) => {
  const info = {
    name: 'Dice Roll API',
    repository: 'https://github.com/iamtheluiz/dice-roll',
  };

  return response.json(info).status(200);
});

routes.post('/api/roll', RollController.roll);

export default routes;
