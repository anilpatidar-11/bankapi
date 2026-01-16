import Employee from '../models/employee.js'

export default class EmployeeService {
  async createEmployee(data: any) {
    return Employee.create({
      branch_id: data.branch_id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      salary: data.salary,
    })
  }

  async getAllEmployee() {
    return Employee.all()
  }

  async getEmployee(id: number) {
    return Employee.findOrFail(id)
  }

  async updateEmployee(id: number, data: any) {
    const user = await Employee.findOrFail(id)
    user.merge(data)
    await user.save()
    return user
  }

  async deleteEmployee(id: number) {
    const user = await Employee.findOrFail(id)
    await user.delete()
  }
}
