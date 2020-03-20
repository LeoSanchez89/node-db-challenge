exports.seed = async function(knex) {
	const resourcesData = [
		{ name: "Unwavering Dedication", description: "Nothing Comes Easy" },
		{ name: "Internet Connection", description: "God Bless the Internet" },
		{ name: "Huawei Laptop", description: "Gets the Job Done" },
		{ name: "Aspirin", description: "So Much Aspirin" }
	];

	await knex("resources").truncate();

	return knex("resources").insert(resourcesData);
};
