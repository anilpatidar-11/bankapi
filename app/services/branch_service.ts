import Branch from '#models/branch'

export default class BranchService {
  async createBranch(data: any) {
    return Branch.create({
      branch_name: data.branch_name,
      branch_code: data.branch_code,
      address: data.address,
      city: data.city,
      phone: data.phone,
    })
  }

  async getAllBranches() {
    return Branch.all()
  }

  async getBranches(id: number) {
    return Branch.findOrFail(id)
  }

  async updateBranches(id: number, data: any) {
    const branch = await Branch.findOrFail(id)
    branch.merge(data)
    await branch.save()
    return branch
  }

  async deleteBranches(id: number) {
    const branch = await Branch.findOrFail(id)
    await branch.delete()
  }
}
