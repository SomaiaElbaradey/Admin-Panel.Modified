/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING(500),
      allowNull: false
    },

  }, {
    tableName: 'categories',
    timestamps: 'false' 
  });
};
