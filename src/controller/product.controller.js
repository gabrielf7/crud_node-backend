const product = require('./../models/product.model');

module.exports = ({
  async index_prod(req, res) {
    res.json('Area dos Produtos');
  },
  async create_prod(req, res) {
    const { nome, descricao, categoria, preco, quantidade } = req.body;
    let data = {};
    let prod = await product.findOne({ nome });
    if (!prod) {
      data = { nome, descricao, categoria, preco, quantidade };
      prod = await product.create(data);
      return res.status(200).json(prod);
    } else {
      return res.status(500).json(prod);
    }
  },
  async listar(req, res) {
    const prod = await product.find();
    res.json(prod);
  },
  async listarDetalhes(req, res) {
    const { _id } = req.params;
    const prod = await product.findOne({ _id });
    if (!prod) {
      res.status(500);
    } else {
      res.json(prod);
    }
  },
  async deletar(req, res) {
    const { _id } = req.params;
    const prod = await product.findByIdAndDelete({ _id });
    res.json(prod);
  },
  async atualizar(req, res) {
    const { _id, nome, descricao, categoria, preco, quantidade } = req.body;
    let data = { nome, descricao, categoria, preco, quantidade };
    const prod = await product.findByIdAndUpdate({ _id }, data, { new: true });
    res.json(prod);
  }
});