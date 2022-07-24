import 'dotenv/config';
import mongoose ,{Schema} from 'mongoose'

const db = mongoose.createConnection(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const BatchSchema = new Schema({
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

db.model('Batch', BatchSchema);

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

db.model('User', UserSchema);

export default db