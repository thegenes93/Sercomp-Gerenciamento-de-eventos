exports.up = function(knex, Promise) {
    return knex.schema.createTable('hack', table => {
        table.increments('id').primary().unique()
        table.integer('p1').unsigned().index().unique()
        table.string('email1')
        table.integer('p2').unsigned().index().unique()
        table.string('email2')
        table.integer('p3').unsigned().index().unique()
        table.string('email3')
        table.integer('p4').unsigned().index().unique()
        table.string('email4')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('hack')
};