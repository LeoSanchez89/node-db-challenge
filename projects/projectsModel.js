const db = require("../data/db-config.js");

module.exports = {
    get, 
    getById, 
    insert,
    getTasks,
    insertTask
}

function get() {
    return db("projects");
}

function getById(id) {
	return db("projects")
		.where({ id })
		.first();
}

function insert(project) {
	return db("projects")
		.insert(project)
		.then(id => {
			return getById(id[0]);
		})
		.catch(err => {
			console.log(err);
		});
}

function getTasks(projects_id) {
    return db("tasks")
        .join("projects", "tasks.projects_id", "projects.id")
        .where({ projects_id })
        .select("projects.name as project_name", "projects.description as project_description", "tasks.description as tasks", "tasks.notes as task_notes");
    
}

function insertTask(task) {
    return db("tasks")
        .insert(task)
}