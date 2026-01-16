import { BaseSeeder } from '@adonisjs/lucid/seeders'
import AccountType from '#models/account_type'

export default class AccountTypeSeeder extends BaseSeeder {
  async run() {
    await AccountType.updateOrCreateMany('name', [
      { name: 'saving' },
      { name: 'current' },
      { name: 'salary' },
    ])
  }
}
