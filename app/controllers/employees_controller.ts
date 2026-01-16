import type { HttpContext } from '@adonisjs/core/http'
import EmployeeService from '../services/employee_service.js'
import { employeeValidator } from '../validators/employee_validation.js'

export default class EmployeeController {
  private service = new EmployeeService()

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(employeeValidator)
    const employee = await this.service.createEmployee(data)
    return response.created({
      message: 'Employee  created successfully',

      employee,
    })
  }

  async index() {
    return this.service.getAllEmployee()
  }

  async show({ params }: HttpContext) {
    return this.service.getEmployee(params.id)
  }

  async update({ params, request }: HttpContext) {
    return this.service.updateEmployee(params.id, request.body())
  }

  async destroy({ params, response }: HttpContext) {
    await this.service.deleteEmployee(params.id)
    return response.ok({ message: 'Employee deleted successfully' })
  }
}
