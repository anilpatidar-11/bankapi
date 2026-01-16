import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Status from '#models/status'

export default class StatusSeeder extends BaseSeeder {
  async run() {
    await Status.updateOrCreateMany('name', [
      { name: 'active' },
      { name: 'inactive' },
      { name: 'closed' },
    ])
  }
}
