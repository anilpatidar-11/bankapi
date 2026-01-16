import vine from '@vinejs/vine'
export const customerValidator = vine.compile(
  vine.object({
    branch_id: vine.number().exists({
      table: 'branches',
      column: 'id',
    }),

    first_name: vine.string().minLength(2),
    last_name: vine.string().minLength(2),
    email: vine.string().email(),
    phone: vine.string(),
    pan_number: vine.string(),
    aadhar_number: vine.string(),
  })
)
