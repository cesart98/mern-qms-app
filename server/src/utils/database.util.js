import 'dotenv/config';
import mongoose from 'mongoose';

const BatchSchema = new mongoose.Schema({
  id: {type: String, required: true},
  material_id: {type: String, required: true},
  material_name: {type: String, required: true},
  location: {type: String, required: true},
  client: {type: String, required: true},
  quantity_total: {type: String, required: true},
  date_recieve: {type: String, required: true},
  date_expire: {type: String, required: true},
  status: { type: String, required: true, enum: [
    'Pending Inspection', 'Pending Sampling',
    'Pending Testing', 'Pending Review', 
    'Pending Release', 'Released'
  ], default: 'Pending Inspection' }
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const mongoUri = process.env.MONGO_URI;
const mongoOpts = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}

mongoose.connect(mongoUri, mongoOpts);
mongoose.connection.model('Batch', BatchSchema);
mongoose.connection.model('User', UserSchema);

export default mongoose.connection;