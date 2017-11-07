const hapi = require("hapi");
const hapiAuthJWT2 = require("hapi-auth-jwt2");
const api = require("./api");

const server = new hapi.Server();

server.connection({
  port: 6001,
  host: "localhost",
  routes: { cors: true },
  router: { stripTrailingSlash: true }
});

server.register([
  hapiAuthJWT2,
  { register: api }
]);

server
  .start()
  .then(() => console.log(`Server started at ${server.info.uri}`))
  .catch(err => console.log(err));