import type { HttpContext } from '@adonisjs/core/http'
import AccountService from '#services/account_service'
import { accountValidator } from '../validators/account_validation.js'

export default class AccountsController {
  private service = new AccountService()

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(accountValidator)

    const account = await this.service.createAccount(data)

    return response.created({
      message: 'Account created successfully',
      account,
    })
  }

  async index() {
    return this.service.getAllAccounts()
  }

  async show({ params }: HttpContext) {
    return this.service.getAccountById(params.id)
  }
}
