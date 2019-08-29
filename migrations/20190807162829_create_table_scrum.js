
exports.up = function(knex, Promise) {
    return knex.schema.createTable('scrum', table => {
        table.increments('id').primary().unique().notNull()
        table.integer('iduser').unsigned().index().references('id').inTable('users').unique().notNull()
        table.string('name').notNull()
        table.string('email').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('scrum')
};