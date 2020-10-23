const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  categoria: String,
  preco: Number,
  quantidade: Number
});

const product = mongoose.model('Product', DataSchema);
module.exports = product;