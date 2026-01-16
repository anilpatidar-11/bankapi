import type { HttpContext } from '@adonisjs/core/http'
import { CustomerService } from '../services/customer_service.js'
import { customerValidator } from '../validators/customer_validation.js'

export default class CustomersController {
  private service = new CustomerService()

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(customerValidator)
    const user = await this.service.createCustomer(data)
    return response.created({
      message: 'customer created successfully',
      user,
    })
  }

  async index() {
    return this.service.getAllCustomer()
  }

  async show({ params }: HttpContext) {
    return this.service.getCustomer(params.id)
  }

  async update({ params, request }: HttpContext) {
    return this.service.updateCustomer(params.id, request.body())
  }

  async destroy({ params, response }: HttpContext) {
    await this.service.deleteCustomer(params.id)
    return response.ok({ message: 'Employee deleted successfully' })
  }
}
