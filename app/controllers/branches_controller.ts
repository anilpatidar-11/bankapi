import type { HttpContext } from '@adonisjs/core/http'
import BranchService from '../services/branch_service.js'
import { brachValidator } from '../validators/branch.js'

export default class BranchController {
  private service = new BranchService()

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(brachValidator)
    const branch = await this.service.createBranch(data)

    return response.created({
      message: 'Branch created successfully',
      branch,
    })
  }

  async index() {
    return this.service.getAllBranches()
  }

  async show({ params }: HttpContext) {
    return this.service.getBranches(params.id)
  }

  async update({ params, request }: HttpContext) {
    return this.service.updateBranches(params.id, request.body())
  }

  async destroy({ params, response }: HttpContext) {
    await this.service.deleteBranches(params.id)
    return response.ok({ message: 'Branch deleted successfully' })
  }
}
