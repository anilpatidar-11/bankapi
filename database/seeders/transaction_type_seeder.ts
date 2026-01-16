import { BaseSeeder } from '@adonisjs/lucid/seeders'
import TransactionType from '#models/transaction_type'

export default class TransactionTypeSeeder extends BaseSeeder {
  async run() {
    await TransactionType.updateOrCreateMany('name', [
      { name: 'deposit' },
      { name: 'withdraw' },
      { name: 'transfer' },
    ])
  }
}
