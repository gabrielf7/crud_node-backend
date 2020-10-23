const express = require('express');
const routes = express.Router();
const user = require('./controller/user.controller');
const product = require('./controller/product.controller');

// Usuarios
routes.get('/user', user.index);
routes.post('/user/new_user', user.create);
routes.get('/user/listar_user', user.listar);
routes.get('/user/listar_detalhes/:_id', user.listarDetalhes);
routes.delete('/user/deletar_user/:_id', user.deletar);
routes.put('/user/atualizar_user', user.atualizar);

// Produtos
routes.get('/product', product.index_prod);
routes.post('/product/new_prod', product.create_prod);
routes.get('/product/listar_prod', product.listar);
routes.get('/product/listar_detalhes/:_id', product.listarDetalhes);
routes.delete('/product/deletar_prod/:_id', product.deletar);
routes.put('/product/atualizar_prod', product.atualizar);

module.exports = routes;