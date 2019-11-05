const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const db = require('S:\projects\Admin\models')
const Users = require('S:\projects\Admin\models')

const adminBro = new AdminBro({
  databases: [],
  rootPath: '/admin',
  databases: [db],
  branding: {
    companyName: 'John Doe Family Business',
    theme
  },
  options: {
    resourse: Users,
    parent: {
      name: 'Modify Users',
      icon: 'fas fa-cogs',
    },
  }
})

const router = AdminBroExpress.buildRouter(adminBro)
module.exports = router 
