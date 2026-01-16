import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Branch from './branch.js'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'first_name' })
  declare first_name: string

  @column({ columnName: 'last_name' })
  declare last_name: string

  @column()
  declare email: string

  @column()
  declare salary: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare branch_id: number

  @belongsTo(() => Branch, {
    foreignKey: 'branch_id',
  })
  declare branch: BelongsTo<typeof Branch>
}
