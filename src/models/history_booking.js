'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class History_booking extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	History_booking.init(
		{
			clientId: DataTypes.INTEGER,
			celebId: DataTypes.INTEGER,
			description: DataTypes.TEXT,
			file: DataTypes.TEXT,
			delete: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'History_booking',
		},
	);
	return History_booking;
};
