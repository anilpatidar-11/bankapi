import router from '@adonisjs/core/services/router'

const BranchesController = () => import('#controllers/branches_controller')
const EmployeeController = () => import('#controllers/employees_controller')
const CustomersController = () => import('#controllers/customers_controller')
const AccountController = () => import('#controllers/accounts_controller')
const TransactionsController = () => import('#controllers/transaction_controller')
router
  .group(() => {
    router.post('branch', [BranchesController, 'store'])
    router.put('branch/:id', [BranchesController, 'update'])
    router.delete('branch/:id', [BranchesController, 'destroy'])
    router.get('branch', [BranchesController, 'index']) //show all
    router.get('branch/:id', [BranchesController, 'show']) //by id

    router.post('employee', [EmployeeController, 'store'])
    router.put('employee/:id', [EmployeeController, 'update'])
    router.delete('employee/:id', [EmployeeController, 'destroy'])
    router.get('employee', [EmployeeController, 'index']) //show all
    router.get('employee/:id', [EmployeeController, 'show']) //by id

    router.post('customer', [CustomersController, 'store'])
    router.put('customer/:id', [CustomersController, 'update'])
    router.delete('customer/:id', [CustomersController, 'destroy'])
    router.get('customer', [CustomersController, 'index']) //show all
    router.get('customer/:id', [CustomersController, 'show']) //by id

    router.post('account', [AccountController, 'store'])

    router.get('account', [AccountController, 'index']) //show all
    router.get('account/:id', [AccountController, 'show']) //by id

    router.post('transactions', [TransactionsController, 'store'])
    router.get('transactions', [TransactionsController, 'index'])
    router.get('/transactions/:id', [TransactionsController, 'show'])
  })
  .prefix('api')
