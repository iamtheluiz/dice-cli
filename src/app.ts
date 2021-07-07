import express from 'express';
import cors from 'cors';
import expressHandlebars from 'express-handlebars';
import path from 'path';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

// Handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine(
  'hbs',
  expressHandlebars({
    defaultLayout: 'template',
    extname: '.hbs',
    partialsDir: path.join(__dirname, 'views', 'components'),
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
  }),
);
app.set('view engine', 'hbs');

app.use(routes);
app.use(express.static('public'));

export default app;
