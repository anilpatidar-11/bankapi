import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Employee from './employee.js'
export default class Branch extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare branch_name: string

  @column()
  declare branch_code: number

  @column()
  declare address: string | null

  @column()
  declare city: string

  @column()
  declare phone: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Employee, {
    foreignKey: 'branch_id',
  })
  public Employee!: HasMany<typeof Employee>
}
