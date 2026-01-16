import Customer from '../models/customer.js'

export class CustomerService {
  async createCustomer(data: any) {
    return Customer.create({
      branch_id: data.branch_id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
      pan_number: data.pan_number,
      aadhar_number: data.aadhar_number,
    })
  }

  async getAllCustomer() {
    return Customer.all()
  }

  async getCustomer(id: number) {
    return Customer.findOrFail(id)
  }

  async updateCustomer(id: number, data: any) {
    const user = await Customer.findOrFail(id)
    user.merge(data)
    await user.save()
    return user
  }

  async deleteCustomer(id: number) {
    const user = await Customer.findOrFail(id)
    await user.delete()
  }
}
