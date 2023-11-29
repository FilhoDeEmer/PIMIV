const dotenv = require('dotenv').config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const flash = require('connect-flash');
const cookieParser = require("cookie-parser");
let session = require('express-session');

const Funcionario = require('./model/funcionario.js').Funcionario
const Empresa = require('./model/empresa.js').Empresa
const Cargo = require('./model/cargo.js').Cargo
const Holerite = require('./model/holerite.js').Holerite
const Usuario = require('./model/usuario.js').Usuario

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: true
}));
app.use(cookieParser());
app.use(flash());

//ROTAS
app.get("/", (req, res) => {
    res.render("index", { message: req.flash('message') })
})

app.post("/login", async function (req, res) {
    session = req.session;
    if (session.userid) {
        res.redirect('/home')
        return;
    }
    const login = req.body.user;
    const password = req.body.password;
    console.log(login)
    console.log(password)
    const user = await Usuario.findOne({ where: { login: login } }).then(async function (user) {
        if (!user) {
            req.flash('message', 'Usuário nao encontrado');
            res.redirect("/")
            console.log("Usuário nao encontrado!");
            return
        }

        let validPassword = await user.validPassword(password);

        if (!validPassword) {
            console.log("aqui foi")
            req.flash('message', 'Senha incorreta');
            res.redirect('/');
            console.log("Senha incorreta!");
            return;
        }

        req.flash('message', 'Logado com sucesso!');
        session = req.session;
        session.userid = req.body.user;
        console.log(req.session);
        console.log("Logado com sucesso!");
        res.redirect('/home');

    });
})

app.get('/logout', (req, res) => {
    console.log("logout");
    req.session.destroy();
    res.redirect('/');
});

app.get("/home", async function (req, res) {
    session = req.session;

    if (!session.userid) {
        console.log("Faça login para ver esta tela!");
        res.redirect("/");
        return;
    }

    const usuario = await Usuario.findOne({ where: { login: req.session.userid } });
    const funcionario = await Funcionario.findOne({ where: { codigo_usuario: usuario.cod_usuario } });
    const empresa = await Empresa.findOne({ where: { codigo_empresa: funcionario.codigo_empresa } });
    const cargo = await Cargo.findOne({ where: { codigo_cargo: funcionario.codigo_cargo } });
    const holerite = await Holerite.findOne({ where: { COD_FUNCIONARIO: funcionario.codigo_funcionario } });

    res.render("home", { informacoes: funcionario, infoempresas: empresa, infocargos: cargo, infofolhas: holerite })
})

app.post("/home", (req, res) => {
    res.render("home", { informacoes: info });
})

app.listen(8080, () => { console.log("Aplicação iniciada com sucesso") })