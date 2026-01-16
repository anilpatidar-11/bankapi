import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Account from '#models/account'
import TransactionType from '#models/transaction_type'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare account_id: number

  @column({ columnName: 'transaction_type_id' })
  declare transaction_type_id: number

  @column()
  declare amount: number

  @column()
  declare balance_after: number

  @column()
  declare beneficiary_account: string | null

  @column.dateTime()
  declare transaction_date: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Account)
  declare account: BelongsTo<typeof Account>

  @belongsTo(() => TransactionType, {
    foreignKey: 'transaction_type_id',
  })
  declare transactionType: BelongsTo<typeof TransactionType>
}
