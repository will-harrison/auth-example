module.exports = {
  method: "GET",
  path: "/api/users/{id}",
  config: {
    handler: function (request, reply) {
      let { id } = request.params;
      this.models.User
        .get(id)
        .then(res => {
          delete res.password;
          reply(res)
        })
        .catch(err => reply(err));
    }
  }
}