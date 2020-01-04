;
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable( 'tipo_persona', function( table ) {
    table.increments('tipo_persona_id');
    table.string('tipo_persona_nombre').notNullable().unique();
    table.string('tipo_persona_descripcion');
  })

  .createTable( 'cartilla', function( table ) {
    table.increments('cartilla_id');
    table.string('cartilla_nombre').notNullable().unique();
    table.string('cartilla_codigo').notNullable().unique();
  })

  .createTable( 'persona', function( table ) {
    table.increments('persona_id');
    table.integer('tipo_persona_id').references('tipo_persona_id').inTable('tipo_persona');
    table.string('persona_identificacion').notNullable().unique();
    table.string('persona_nombre').notNullable();
    table.string('persona_email').notNullable();
    table.string('persona_direccion').notNullable();
    table.string('persona_telefono').notNullable();
    table.string('persona_clave').notNullable();
  })

  .createTable( 'persona_cartilla', function( table ) {
    table.increments('persona_cartilla_id');
    table.integer('persona_id').references('persona_id').inTable('persona');
    table.integer('cartilla_id').references('cartilla_id').inTable('cartilla');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists( 'persona_cartilla' )
    .dropTableIfExists( 'persona' )
    .dropTableIfExists( 'cartilla' )
    .dropTableIfExists( 'tipo_persona' )
};