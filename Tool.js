const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  version: { type: String, required: true },
  website: String,
  downloadUrl: { type: String, required: true },
  license: String,
  dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Tool', toolSchema);
