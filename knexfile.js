// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    client: 'mysql2',
    connection: {
      host: 'sua_host',
      port: 3306, // Normalmente é 3306
      user: 'seu_usuario',
      password: 'sua_senha',
      database: 'nome_da_db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
}
