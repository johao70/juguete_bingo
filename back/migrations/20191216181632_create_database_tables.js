;
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable( 'tipo_persona', function( table ) {
    table.increments('tipo_persona_id');
    table.string('tipo_persona_nombre').notNullable().unique();
    table.string('tipo_persona_descripcion');
  })

  .createTable( 'tipo_identificacion', function( table ) {
    table.increments('tipo_identificacion_id');
    table.string('tipo_identificacion_nombre').notNullable().unique();
  })

  .createTable( 'estado_persona', function( table ) {
    table.increments('estado_persona_id');
    table.string('estado_persona_nombre').notNullable().unique();
    table.string('estado_persona_descripcion');
  })

  .createTable( 'persona', function( table ) {
    table.increments('persona_id');
    table.integer('tipo_identificacion_id').references('tipo_identificacion_id').inTable('tipo_identificacion');
    table.integer('tipo_persona_id').references('tipo_persona_id').inTable('tipo_persona');
    table.integer('estado_persona_id').references('estado_persona_id').inTable('estado_persona');
    table.string('persona_identificacion').notNullable().unique();
    table.string('persona_nombre').notNullable();
    table.string('persona_email').notNullable();
    table.string('persona_direccion').notNullable();
    table.string('persona_telefono').notNullable();
    table.string('persona_clave').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists( 'persona' )
    .dropTableIfExists( 'estado_persona' )
    .dropTableIfExists( 'tipo_identificacion' )
    .dropTableIfExists( 'tipo_persona' )
};