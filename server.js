const express = require('express');
const app = express();
const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//database
const mysql = require("mysql");
const sequelize = require('./config/database');
const AdminBroSequelize = require('admin-bro-sequelizejs');

const theme = require('admin-bro-theme-dark');
const db = require('./models');
const Users = require('./models/users.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({

  databases: [db],

  branding: {
    theme,
    
  },

  dashboard: [{  
    theme,
  }],

  loginPath: '/admin/login',

  resources: [{ 
    resource: Users,
    options: {

    actions: {
      delete: {
        guard: 'do you really want to delete this amazing element?',
      },

      parent: {
      name: 'Manage Users',
      icon: 'fas fa-cogs',
    },
   },

  },
  }],

})

sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'test@example.com',
  password: process.env.ADMIN_PASSWORD || 'password',
  
}
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'adminbro',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'somepassword-superlong-for-cookie-in-browser',
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN
    }
    return null
  }
})

app.use(adminBro.options.rootPath, router)
app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))