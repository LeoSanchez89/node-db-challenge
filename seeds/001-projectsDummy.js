exports.seed = async function(knex) {
	const projectsData = [
    
    { name: "Graduate Lambda", description: "Grind hard to finish school" },
		{ name: "Get Amazing Job", description:"Get paid to do what you love" },
	
	];

	await knex("projects").truncate();

	return knex("projects").insert(projectsData);
};
