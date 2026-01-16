import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Customer from '#models/customer'
import Branch from '#models/branch'
import Status from '#models/status'
import AccountType from '#models/account_type'

export default class Account extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare account_number: string

  @column()
  declare balance: number

  @column()
  declare opening_date: string

  @column()
  declare customer_id: number

  @column()
  declare branch_id: number

  @column()
  declare account_type_id: number

  @column()
  declare status_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Customer)
  declare customer: BelongsTo<typeof Customer>

  @belongsTo(() => Branch)
  declare branch: BelongsTo<typeof Branch>

  @belongsTo(() => AccountType)
  declare accountType: BelongsTo<typeof AccountType>

  @belongsTo(() => Status)
  declare status: BelongsTo<typeof Status>
}
