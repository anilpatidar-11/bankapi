import vine from '@vinejs/vine'
export const employeeValidator = vine.compile(
  vine.object({
    branch_id: vine.number().exists({
      table: 'branches',
      column: 'id',
    }),

    first_name: vine.string().minLength(2),
    last_name: vine.string().minLength(2),
    email: vine.string().email(),
    salary: vine.number(),
  })
)
