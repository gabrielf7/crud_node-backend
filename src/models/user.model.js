const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String
});

const users = mongoose.model('Users', dataSchema);
module.exports = users;