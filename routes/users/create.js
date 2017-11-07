module.exports = {
  method: "POST",
  path: "/api/users",
  config: {
    auth: { mode: "optional" },
    handler: function (request, reply) {
      let user = new this.models.User(request.payload);
      user
        .save()
        .then(res => {
          delete user.password;
          reply(res);
        })
        .catch(err => reply(err));
    }
  }
}