const post = require("./post")

module.exports = {
  use: server => post(server)
}
