const express = require("express");
const routes = express.Router();

const FiguraController = require("./controllers/FiguraController");
const UserController = require("./controllers/UserController");




// Rotas de Usuário	
routes.post('/signup', UserController.signup);

// Rotas de Figuras
routes.get("/figurinha", FiguraController.getFiguras);
routes.get("/figura/:id", FiguraController.getFigById);
routes.post("/user/figurinha", FiguraController.getFigurasByUserId);



module.exports = routes;