;
let datosDb = require('./database/datosDb')

module.exports = {
    development: {
        migrations: { 
            tableName: 'knex_migrations',
            directory: "./migrations"
        },
        seeds: { 
            directory: "./seeds"
        },
        client: datosDb.client,
        connection: datosDb.connection   
    },
    production: {
        migrations1: { 
            tableName: 'knex_migrations'
        },
        seeds: { 
            tableName: './base_de_datos/seeds' 
        },
        client: datosDb.client,
        connection: datosDb.connection   
    }
}