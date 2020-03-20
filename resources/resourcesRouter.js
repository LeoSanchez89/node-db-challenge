const express = require("express");

const Resources = require("./resourcesModel.js");

const router = express.Router();

router.get("/", (req, res) => {
	Resources.get()
		.then(resc => {
			res.json(resc);
		})
		.catch(err => {
			res.status(500).json({ error: "error fetching Resources", err });
		});
});

router.get("/:id", (req, res) => {
	Resources.getById(req.params.id)
		.then(resc => {
			res.json(resc);
		})
		.catch(err => {
			res.status(500).json({ error: "error fetching resource", err });
		});
});

router.post("/", (req, res) => {
	Resources.insert(req.body)
		.then(resc => {
			res.status(201).json(resc);
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to create new resource" });
		});
});

module.exports = router;
