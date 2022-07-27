import 'dotenv/config';

import app from './express';
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const mongoOpts = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}

mongoose
  .connect(MONGO_URI, mongoOpts)
  .then(() => app.listen(PORT))
  .then(() => console.log(`Server is listening on port ${PORT}`))
  .catch((err) => console.error(err.stack));
