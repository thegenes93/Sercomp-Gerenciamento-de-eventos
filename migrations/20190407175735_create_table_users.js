exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.string('cpf').notNull()
        table.string('street').notNull()
        table.string('name').notNull()
        table.string('telefone').notNull()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.boolean('pagamento').notNull().defaultTo(false)
        table.boolean('notf').defaultTo(0)
        table.boolean('admin').notNull().defaultTo(false)
        table.string('receiver')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};