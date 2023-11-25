const express = require ("express")
const app = express()
const bodyParser = require("body-parser")
/* const dbConfig = require ("./server/config/database")
const connection = require ("./server/database/parans") */
const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
// Option 1: Passing parameters separately
const sequelize = new Sequelize('HERMES', 'sa', '123456789', {
  host: 'localhost',
  dialect: 'mssql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const Funcionario = sequelize.define('Funcionario', {
    // Model attributes are defined here
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    // Other model options go here
  });
  /* (async () => {
    const funcionarios = await Funcionario.findAll({
      attributes: ['nome']
    });
    console.log("All funcionarios:", JSON.stringify(funcionarios, null, 2));
  })(); */

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
