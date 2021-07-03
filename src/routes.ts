import express from 'express';

// Controllers
import RollController from './controllers/RollController';

const routes = express.Router();

routes.get('/', (request, response) => {
  const info = {
    name: 'Dice Roll API',
    repository: 'https://github.com/iamtheluiz/dice-roll',
  };

  return response.json(info).status(200);
});

routes.post('/roll', RollController.roll);

export default routes;
