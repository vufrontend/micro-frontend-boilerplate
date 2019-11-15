const getMockData = server =>
  server.get("/test", (req, res) => {
    res.status(200).jsonp({
      data: "got it"
    })
  })

module.exports = getMockData
