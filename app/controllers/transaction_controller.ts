import type { HttpContext } from '@adonisjs/core/http'
import TransactionService from '#services/transaction_service'
import { transactionValidator } from '#validators/transaction_validator'

export default class TransactionsController {
  private service = new TransactionService()

  async store({ request, response }: HttpContext) {
    try {
      const data = await request.validateUsing(transactionValidator)

      const result = await this.service.createTransaction(data)

      return response.created({
        message: 'Transaction successful',
        data: result,
      })
    } catch (error) {
      return response.badRequest({
        message: error.message || 'Transaction failed',
      })
    }
  }

  async index({ request }: HttpContext) {
    const filters = request.qs()
    return this.service.getTransactions(filters)
  }

  async show({ params }: HttpContext) {
    return this.service.getOne(params.id)
  }
}
