import db from '@adonisjs/lucid/services/db'
import Account from '#models/account'
import Transaction from '#models/transaction'
import TransactionType from '#models/transaction_type'
import { DateTime } from 'luxon'

export default class TransactionService {
  async createTransaction(data: any) {
    return db.transaction(async (trx) => {
      const account = await Account.query({ client: trx })
        .where('id', data.account_id)
        .forUpdate()
        .firstOrFail()

      console.log(account, '++++account iddd')

      const transactionType = await TransactionType.query({ client: trx })
        .where('id', data.transaction_type_id)
        .firstOrFail()

      console.log(transactionType, '++++transactionType iddd')

      let newBalance = Number(account.balance)
      const amount = Number(data.amount)

      if (transactionType.name === 'deposit') {
        newBalance = newBalance + amount
      }

      if (transactionType.name === 'withdraw') {
        if (newBalance < amount) {
          throw new Error('Insufficient balance')
        }

        newBalance = newBalance - amount
      }

      account.balance = newBalance
      await account.save()

      const transaction = await Transaction.create(
        {
          account_id: account.id,
          transaction_type_id: transactionType.id,
          amount,
          balance_after: newBalance,
          transaction_date: DateTime.now(),
          beneficiary_account: data.beneficiary_account || null,
        },
        { client: trx }
      )

      return transaction
    })
  }

  async getOne(id: number) {
    return Transaction.findOrFail(id)
  }

  async getTransactions(filters: any) {
    const query = Transaction.query().preload('transactionType')

    if (filters.account_id) {
      query.where('account_id', filters.account_id)
    }

    if (filters.transaction_type_id) {
      query.where('transaction_type_id', filters.transaction_type_id)
    }

    if (filters.from_date && filters.to_date) {
      query.whereBetween('transaction_date', [filters.from_date, filters.to_date])
    }

    return query.orderBy('transaction_date', 'desc')
  }
}
