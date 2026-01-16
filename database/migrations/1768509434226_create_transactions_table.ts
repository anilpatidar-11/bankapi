import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('account_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('accounts')
        .onDelete('CASCADE')

      table
        .integer('transaction_type_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('transaction_types')

      table.decimal('amount', 15, 2).notNullable()
      table.decimal('balance_after', 15, 2).notNullable()

      table.dateTime('transaction_date').notNullable()

      table.string('beneficiary_account').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
