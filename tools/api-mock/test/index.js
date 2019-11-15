const getMockData = require("./getMockData")
const postMockData = require("./postMockData")

module.exports = {
  use: server => {
    getMockData(server)
    postMockData(server)
  }
}
