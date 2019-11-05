/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('users', {

    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
   
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },

    validate_code: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_activated: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {

    tableName : 'users',  
    updatedAt : 'updated_at',
    createdAt : 'created_at'

  });
};
