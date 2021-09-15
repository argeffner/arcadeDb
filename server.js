const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || https://arcade13.herokuapp.com/;

server.use(middlewares);
server.use(router);

server.listen(port);
