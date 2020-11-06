
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments()
      tbl.string('project_name', 128).notNullable()
      tbl.string('address', 128).notNullable().unique()
    })
    .createTable('resources', tbl => {
      tbl.increments()
      tbl.string('resources_name', 128).notNullable()
    })
    .createTable('tasks', tbl => {
      tbl.increments()
      tbl.string('task_name', 128)
      tbl.integer('resources_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT') // 'RESTRICT'
        .onUpdate('CASCADE') // 'RESTRICT'
    })
    .createTable('project_tasks', tbl => {
      tbl.increments()
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT') // RESTRICT
        .onUpdate('CASCADE')
      tbl.integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onDelete('RESTRICT') // RESTRICT
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
