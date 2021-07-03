import express from 'express';

const app = express();
const routes = express.Router();
const port = 3000;

routes.get('/', (request, response) => {
  const info = {
    name: 'Dice Roll API',
    repository: 'https://github.com/iamtheluiz/dice-roll',
  };

  return response.json(info).status(200);
});

app.use(routes);

app.listen(port, () => {
  console.log('Server running at http://localhost:3000/');
});
