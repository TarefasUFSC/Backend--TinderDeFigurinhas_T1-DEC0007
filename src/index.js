const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const WebSocket = require("ws");

const mongoose = require('mongoose');
// get env variables
require('dotenv').config();

mongoose.connect("mongodb+srv://gourmet:"+process.env.MONGODB_PSW+"@clusterdec0007.itfze4v.mongodb.net/DEC0007_T1?retryWrites=true&w=majority", {useMongoClient: true })
const database = mongoose.connection;
database.on('error',(e)=>{console.log(e);})
database.once('connected',()=>{console.log("Db conectado");})

//const server = require("http").createServer(app);
const wss = new WebSocket.Server(
  { port: 8080, host: "0.0.0.0" },
  function () {
    console.log(
      "Iniciando websocket na porta 8080"
    );
  }
);

wss.on("connection", function connection(ws) {
  console.log("New connection");
  ws.on("message", function incoming(message) {
    var msg = JSON.parse(message);
    console.log(msg);
  });

  ws.send(JSON.stringify({msg:"Roi, client-kun"}));
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, "0.0.0.0");
