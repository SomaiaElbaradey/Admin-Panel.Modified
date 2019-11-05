/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flight', {
    flight_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    schedule_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'flight'
  });
};
