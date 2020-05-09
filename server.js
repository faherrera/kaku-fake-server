const jsonServer = require("json-server");
var generate = require("./services.js");
const server = jsonServer.create();
var router = jsonServer.router(generate());
router.db.object = generate();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 1593;

server.use(middlewares);
server.use(router);

server.listen(port);
