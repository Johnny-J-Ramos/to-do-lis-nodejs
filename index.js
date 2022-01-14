const express = require('express')
const path = require('path') // serve para direcionar as pastas
const routes = require("./routes/routes")

const HOST = '0.0.0.0';

const app = express()
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

app.use(routes)


app.listen(3000, () => console.log(`Servidor rodando em http://localhost:${port}`)
) // usando Arrow functions