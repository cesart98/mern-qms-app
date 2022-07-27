import 'dotenv/config'

import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes'
import batchRoutes from './routes/batch.routes'

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api/users', authRoutes);
app.use('/api/batches', batchRoutes);

export default app;
