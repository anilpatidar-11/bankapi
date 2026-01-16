import Account from '#models/account'

export default class AccountService {
  async createAccount(data: any) {
    return Account.create({
      account_number: data.account_number,
      customer_id: data.customer_id,
      branch_id: data.branch_id,
      account_type_id: data.account_type_id,
      status_id: data.status_id,
      opening_date: data.opening_date,
      balance: data.balance,
    })
  }

  async getAllAccounts() {
    return Account.all()
  }

  async getAccountById(id: number) {
    return Account.findOrFail(id)
  }
}
