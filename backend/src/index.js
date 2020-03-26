const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors({}));
app.use(express.json()); // antes de todas as requisições, ir no body e converter para formato json
app.use(routes); // importando rotas

/** 
 * Tipos de parametros:

query: /useers?name="thiago" -> request.query
recursos: /users/:id -> request.params
body -> request.body
*/ 

/** 
 * Banco de dados
 * 
Knex
Abordagem: query builder

Iniciando arquivo Knx -> npx knex init
*/ 

app.listen(3333);