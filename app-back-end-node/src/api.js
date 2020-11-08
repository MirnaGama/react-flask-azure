import express from 'express'
const app = express()
const PORT = 5000

var cors = require('cors');
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
app.use(cors(corsOpts));

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))

app.get("/primeiroEndpoint", (req,res) => {
    
    logEndpoint("GET", "/primeiroEndpoint", 200)
    res.status(200).send({
        title: "Sucesso!",
        message: "Comunicação com o primeiro endpoint foi bem sucedida!"
    })
})

app.get("/segundoEndpoint", (req,res) => {
    
    logEndpoint("GET", "/segundoEndpoint", 200)
    res.status(200).send({
        title: "Sucesso!",
        message: "Comunicação com o segundo endpoint foi bem sucedida!"
    })

})

app.post('/terceiroEndpoint/:message', function (req, res) {

    logEndpoint("POST", "/terceiroEndpoint", 200)
    res.status(200).send({
        title: "Sucesso!",
        message: `Comunicação com o terceiro endpoint foi bem sucedida! Mensagem enviada: ${req.params.message}`
    })
  });

function logEndpoint(method, name, status) {
    var date = new Date();
    var h = date.getHours()-1+":"+date.getMinutes() // hora (correção de horario de verão)
    var d = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear() // data

    console.log(`[${d} -- ${h}] -- ${method} ${name} -- Status: ${status}`)
}