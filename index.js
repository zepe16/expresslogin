//npm init
//npm install express
//npm install nodemon
//npm install --save-dev nodemon

const express = require('express')
const nodemon = require('nodemon')
const app = express()
const port = 3000
const path = require('path')
const basePath= path.join(__dirname)

const checkAuth = function(req,res,next){
    req.authStatus = true
    if(req.authStatus){
        console.log('Está Logado')
    } else {
        console.log('Não Está Logado')
    }
}
    app.use(checkAuth)
app.get('/',(req,res) => {
    res.sendFile(`${basePath}/home.html`)
}) //faz uma requisição e espera uma resposta dela

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})