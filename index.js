const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const Funcionario = require('./model/funcionario.js').Funcionario
const Empresa = require('./model/empresa.js').Empresa
/* const dbConfig = require ("./server/config/database")
const connection = require ("./server/database/parans") */


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

Funcionario.hasOne(Empresa);
/* Empresa.belongsTo(Funcionario); */

//ROTAS
app.get("/", (req, res) => {
    res.render("index")
})

app.post("/home", (req, res) => {
    res.render("home")
})

app.get("/mInformacao", async function (req, res) {
    const info = await Funcionario.findOne({where: { nome: 'Igor Prado' }, include: Empresa });
    res.render("home", {informacoes: info})
})

app.post("/mInformacao", (req, res) => {
    res.render("home", {informacoes: info})
})

/* app.get("/home", (req, res) => {
    res.render("teste")
}) */

app.listen(8080, () => { console.log("Aplicação iniciada com sucesso") })