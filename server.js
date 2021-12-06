const jsonServer = require('json-server'); //get package that we just created
const server = jsonServer.create(); //invoke it with this command
const router = jsonServer.router('projects.json'); //route to the database
const middlewares = jsonServer.defaults(); 
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);