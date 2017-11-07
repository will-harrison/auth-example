const models = require("./models");
const routes = require("./routes");

module.exports.register = (server, options, next) => {
  server.auth.strategy("jwt", "jwt", {
    key: "blahblahblah",
    validateFunc: (decoded, request, callback) => {
      if (!decoded.id) return callback(null, false);
      else return callback(null, true);
    },
    verifyOptions: {
      algorithms: ["HS256"]
    }
  });

  server.auth.default({ strategy: "jwt" });

  server.bind({ models });
  server.route(routes);
  next();
};

module.exports.register.attributes = {
  name: "api",
  version: "1.0.0"
};