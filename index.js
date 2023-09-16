const express = require ("express")
const app = express()
const bodyParser = require("body-parser")
const dbConfig = require ("./server/config/database")
const connection = require ("./server/database/parans")
const Sequelize = require ("sequelize")

// COMENTARIO TESTE





app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//ROTAS
app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/home",(req,res)=>{
    res.render("teste")
})

app.get("/home",(req,res)=>{
    res.render("teste")
})

app.listen(8080,()=>{console.log("Aplicação iniciada com sucesso")})