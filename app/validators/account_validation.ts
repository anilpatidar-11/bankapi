import vine from '@vinejs/vine'

export const accountValidator = vine.compile(
  vine.object({
    account_number: vine.string(),

    customer_id: vine.number().exists({
      table: 'customers',
      column: 'id',
    }),

    branch_id: vine.number().exists({
      table: 'branches',
      column: 'id',
    }),

    account_type_id: vine.number().exists({
      table: 'account_types',
      column: 'id',
    }),

    status_id: vine.number().exists({
      table: 'statuses',
      column: 'id',
    }),
    balance: vine.number(),
    opening_date: vine.string(),
  })
)
