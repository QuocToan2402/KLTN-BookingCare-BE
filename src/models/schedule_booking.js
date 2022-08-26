'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Schedule_booking extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Schedule_booking.init(
		{
			currentNumber: DataTypes.INTEGER,
			dateBooking: DataTypes.DATE,
			time: DataTypes.STRING,
			celebId: DataTypes.INTEGER,
			//delete: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Schedule_booking',
		},
	);
	return Schedule_booking;
};
