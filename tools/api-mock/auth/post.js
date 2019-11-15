const post = server =>
  server.post("/auth", (req, res) => {
    if (req.body.username === "test401") {
      res.sendStatus(401)
    } else {
      res.status(201).jsonp({
        token:
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtb2R1bGVzIiwiZmlyc3RuYW1lIjoiTW9kdWxlcyIsImlkIjoiMGNjYzA3NWMtYjI2Zi00MGU1LTg5YTItMjFkMGE5NDE5NjFkIiwibGFzdG5hbWUiOiJBcHBvaW50bWVudHMiLCJpYXQiOjE1MzI0MTY3NzcsImV4cCI6MTU0ODk1NDAwMH0.9EITREABK2QC_QgcXud-WDaF_Q_QvhsxrrVtlmkKPh84hUywxnnAAXkc7zzX5pkKa6Qz4otM3CqmY5B8KdPZbw"
      })
    }
  })

module.exports = post
