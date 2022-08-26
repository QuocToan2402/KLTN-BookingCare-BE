'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Booking extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Booking.init(
		{
			statusId: DataTypes.STRING,
			celebId: DataTypes.INTEGER,
			clientId: DataTypes.INTEGER,
			bookingDate: DataTypes.DATE,
			time: DataTypes.STRING,
			price: DataTypes.INTEGER,
			delete: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Booking',
		},
	);
	return Booking;
};
