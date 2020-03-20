const express = require("express");
// const Router = require("");

const server = express();

server.use(express.json());

// server.use("/api/Router", Router);

server.get("/", (req, res) => {
	res.json({ message: "api running" });
});

module.exports = server;
