
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments()
      tbl.string('project_name', 128).notNullable()
      tbl.string('project_description', 128)
    })
    .createTable('resources', tbl => {
      tbl.increments()
      tbl.string('resources_name', 128).notNullable()
      tbl.string('resource_description', 128)
    })
    .createTable('tasks', tbl => {
      tbl.increments()
      tbl.string('task_description', 128)
        .notNullable()
      tbl.string('task_notes', 128)
      tbl.integer('resources_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE') 
    })
    .createTable('project_tasks', tbl => {
      tbl.increments()
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE')
      tbl.integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_tasks')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
