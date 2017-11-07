module.exports = {
  method: "POST",
  path: "/api/users/login",
  config: {
    auth: { mode: "optional" },
    handler: function (request, reply) {
      let { email, password } = request.payload;
      this.models.User.filter({ email: email })
        .then(users => {
          let [user] = users;
          if (!user) {
            throw "Email and password combination is incorrect."
          }
          return user.comparePassword(password);
        })
        .then(user => {
          if (!user) {
            throw "Email and password combination is incorrect."
          }

          delete user.password;
          return user.generateJWT();
        })
        .then(user => reply(user))
        .catch(err => err);
    }
  }
};