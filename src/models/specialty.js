'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Specialty extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Specialty.init(
		{
			specialtyName: DataTypes.STRING,
			image: DataTypes.TEXT,
			specialtyDescription: DataTypes.TEXT,
			delete: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Specialty',
		},
	);
	return Specialty;
};
