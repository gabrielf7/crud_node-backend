const Users = require('../models/user.model');

module.exports = {
  index(req, res) {
    res.json('Esse é o index do controller do user');
  },
  async create(req, res) {
    const { nome, email, senha } = req.body;
    let data = {};
    let user = await Users.findOne({ email });
    if (!user) {
      data = { nome, email, senha };
      user = await Users.create(data);
      return res.status(200).json(Users);
    } else {
      return res.status(500).json(Users);
    }
  },
  async listar(req, res) {
    const user = await Users.find();
    res.json(user);
  },
  async listarDetalhes(req, res) {
    const { _id } = req.params;
    const user = await Users.findOne({ _id });
    if (!user) {
      res.status(500);
    } else {
      res.json(user);
    }
  },
  async deletar(req, res) {
    const { _id } = req.params;
    const user = await Users.findByIdAndDelete({ _id });
    res.json(user);
  },
  async atualizar(req, res) {
    const { _id, nome, email, senha } = req.body;
    const data = { nome, email, senha };
    const user = await Users.findByIdAndUpdate({ _id }, data, { new: true });
    res.json(user);
  }
}