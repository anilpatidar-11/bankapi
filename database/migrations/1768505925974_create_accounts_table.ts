import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'accounts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('account_number').notNullable().unique()

      table
        .integer('customer_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('customers')
        .onDelete('CASCADE')

      table
        .integer('account_type_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('account_types')

      table.integer('branch_id').unsigned().notNullable().references('id').inTable('branches')

      table.integer('status_id').unsigned().notNullable().references('id').inTable('statuses')

      table.decimal('balance', 15, 2).defaultTo(0)

      table.date('opening_date')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
