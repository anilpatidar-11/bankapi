import vine from '@vinejs/vine'

export const brachValidator = vine.compile(
  vine.object({
    branch_name: vine.string().minLength(2),
    branch_code: vine.number(),
    address: vine.string(),
    city: vine.string(),
    phone: vine.string().minLength(10),
  })
)
