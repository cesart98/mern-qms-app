import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';
require('dotenv').config();
import './utils/mongoConfig.js';
import './utils/passportConfig.js';

import routes from './routes';

var app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', routes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Sorry can't find that!"})
})

export default app;
