// import { DateTime } from 'luxon'
// import { BaseModel, column } from '@adonisjs/lucid/orm'

// export default class AccountType extends BaseModel {
//   @column({ isPrimary: true })
//   declare id: number

//   @column.dateTime({ autoCreate: true })
//   declare createdAt: DateTime

//   @column.dateTime({ autoCreate: true, autoUpdate: true })
//   declare updatedAt: DateTime
// }
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Account from '#models/account'

export default class AccountType extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Account, {
    foreignKey: 'account_type_id',
  })
  declare accounts: HasMany<typeof Account>
}
