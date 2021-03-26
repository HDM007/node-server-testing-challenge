const express = require("express");
const helmet = require("helmet");
//const snacksRouter = require("./snacks-router");
const server = express();
server.use(helmet());
server.use(express.json());

//server.use("api/snacks", snacksRouter)