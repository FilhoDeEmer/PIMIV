const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const Funcionario = require('./model/funcionario.js').Funcionario
const Empresa = require('./model/empresa.js').Empresa
const Cargo = require('./model/cargo.js').Cargo
const Holerite = require('./model/holerite.js').Holerite


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//ROTAS
app.get("/", (req, res) => {
    res.render("index")
})

app.post("/home", (req, res) => {
    res.render("home")
})

app.get("/mInformacao", async function (req, res) {
    const info = await Funcionario.findOne({ where: { codigo_funcionario: '4' } });
    const infoem = await Empresa.findOne({where: { codigo_empresa: '4'}});
    const infoca = await Cargo.findOne({where: {codigo_cargo: '4'}});
    const infoho = await Holerite.findOne({where: {COD_FOLHA: '1' }})
    
    res.render("home", { informacoes: info, infoempresas: infoem, infocargos: infoca, infofolhas: infoho  })
})

app.post("/mInformacao", (req, res) => {
    res.render("home", { informacoes: info })
})


/* app.get("/home", (req, res) => {
    res.render("teste")
}) */

app.listen(8080, () => { console.log("Aplicação iniciada com sucesso") })