const postMockData = server =>
  server.post("/test", (req, res) => {
    res.status(201).jsonp({
      data: "Hi!"
    })
  })

module.exports = postMockData
