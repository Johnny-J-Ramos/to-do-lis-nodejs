const routes = require("express").Router();
const TaskControler = require("../controller/TaskContoller")

routes.get("/", TaskControler.getAll)

module.exports = routes