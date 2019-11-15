// eslint-disable-next-line import/no-extraneous-dependencies
const jsonServer = require("json-server")
const path = require("path")
const test = require("./test")

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, "db.json"))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

test.use(server)

server.use(router)
server.listen(3003, () => {
  console.log("JSON Server is running")
})
