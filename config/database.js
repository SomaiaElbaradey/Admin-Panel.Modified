const Sequelize = require('sequelize');
module.exports =  new Sequelize('booking_system', 'admin', '12345678', {
host: 'localhost',
dialect:  'mysql',
pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
}
})

