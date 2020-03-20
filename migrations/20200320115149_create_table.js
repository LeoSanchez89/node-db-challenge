
exports.up = function(knex) {
    return knex.schema
			.createTable("projects", tbl => {
				tbl.increments();
				tbl
					.string("name", 255)
					.notNullable()
					.unique();
				tbl.string("description", 255);
				tbl
					.boolean("completed")
					.notNullable()
					.defaultTo(false);
			})

			.createTable("resources", tbl => {
				tbl.increments();
				tbl
					.string("name", 255)
					.notNullable()
					.unique();
				tbl.string("description", 255);
			})

			.createTable("tasks", tbl => {
                tbl.increments();
                tbl.integer("projects_id")
                    .unsigned()
                    .notNullable()
                    .references("id")
                    .inTable("projects")
                    .onDelete("cascade")
                    .onUpdate("cascade");
				tbl
					.string("description", 255)
					.notNullable()
				tbl.string("notes", 255);
				tbl
					.boolean("completed")
					.notNullable()
					.defaultTo(false);
            })
    
        .createTable("projects_resources", tbl => {
            tbl.primary(["projects_id", "resources_id"]);
            tbl
				.integer("projects_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("projects")
				.onDelete("cascade")
                .onUpdate("cascade");
            tbl
				.integer("resources_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("resources")
				.onDelete("cascade")
				.onUpdate("cascade");
            })
    
};

exports.down = function(knex) {
  
};
