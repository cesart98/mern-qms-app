import 'dotenv/config'

import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import authRoutes from './routes/auth.routes'
import batchRoutes from './routes/batch.routes'

import './utils/database.util'

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api/users', authRoutes);
app.use('/api/batches', batchRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json(`Error: ${err.message}`);
})

app.listen(process.env.PORT, () => {
  console.log('Listening on port 3000')
})

export default app;
