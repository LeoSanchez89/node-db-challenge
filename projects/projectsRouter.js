const express = require("express");

const Projects = require("./projectsModel.js");

const router = express.Router();

router.get("/", (req, res) => {
	Projects.get()
		.then(projs => {
			res.json(projs);
		})
		.catch(err => {
			res.status(500).json({ error: "error fetching projects", err });
		});
});

router.get("/:id", (req, res) => {
    Projects.getById(req.params.id)
        .then(proj => {
            res.json(proj);
        })
        .catch(err => {
            res.status(500).json({ error: "error fetching project", err });
        });
})

router.post("/", (req, res) => {

	Projects.insert(req.body)
		.then(proj => {
			res.status(201).json(proj);
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to create new project" });
		});
});

router.get("/:id/tasks", (req, res) => {
    Projects.getTasks(req.params.id)
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to fetch tasks", err });
        });
});

router.post("/:id/tasks", (req, res) => {
    let newTask = req.body
    const { id } = req.params;
    newTask.projects_id = id;
    Projects.insertTask(newTask)
        .then(add => {
            res.json(add);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to add task", err });
        });
})
module.exports = router;