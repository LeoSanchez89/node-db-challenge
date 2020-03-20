
exports.seed = async function(knex) {
	const tasksData = [
		{
			projects_id: 1,
			description: "Do The MOST",
			notes: "Just Kill Everything You Do"
		},
		{
			projects_id: 2,
			description: "?????",
			notes: "PROFIT"
		}
	];

	await knex("tasks").truncate();

	return knex("tasks").insert(tasksData);
};