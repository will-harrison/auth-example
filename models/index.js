const thinky = require("thinky");
const db = thinky({ db: "AuthAPI" });
let User = require("./User")(db);

module.exports = {
  User
};