import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
  const info = {
    name: 'Dice Roll API',
    repository: 'https://github.com/iamtheluiz/dice-roll',
  };

  return response.json(info).status(200);
});

export default routes;
