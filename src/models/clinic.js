'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Clinic extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Clinic.init(
		{
			clinicName: DataTypes.STRING,
			clinicAddress: DataTypes.STRING,
			clinicDescription: DataTypes.TEXT,
			image: DataTypes.TEXT,
			doctorId: DataTypes.INTEGER,
			delete: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Clinic',
		},
	);
	return Clinic;
};
