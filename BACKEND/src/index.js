const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
* Rota/Recurso
*/

/**
 * Metodos HTTP
 * 
 * GET: Buscar informação do Back-End
 * POST: Criar informação no Back-End
 * PUT: Alterar informação no Back-End
 * DELETE: Deletar informação no Back-End
 */

 /**
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisisção, utilizado para criar ou alterar recursos
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL, MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM user
 * Query Builder: table('users').select('*').where()
 */





