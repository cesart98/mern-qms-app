var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InventorySchema = new Schema({
  id: {type: String, required: true},
  batches: [{type: Schema.Types.ObjectId, ref: 'Batch'}],
});

InventorySchema.virtual('url').get(function() {
  return '/inventory/' + this._id;
});

module.exports = mongoose.model('Inventory', InventorySchema);