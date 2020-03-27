// Update with your config settings.

// auto-created after `npx knex init` command

module.exports = {
  // this work will be done in this workspace
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations : {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
  /**
   * TEST:
   * with DB integration
   */
  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations : {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  /**
   * IGNORE FROM HERE TO BOTTOM
   */

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
