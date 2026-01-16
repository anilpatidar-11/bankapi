import vine from '@vinejs/vine'

export const transactionValidator = vine.compile(
  vine.object({
    account_id: vine.number().exists({
      table: 'accounts',
      column: 'id',
    }),

    transaction_type_id: vine.number().exists({
      table: 'transaction_types',
      column: 'id',
    }),

    amount: vine.number(),

    beneficiary_account: vine.string().optional(),
  })
)
