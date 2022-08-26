'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Celeb_info extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Celeb_info.init(
		{
			stageName: DataTypes.STRING,
			price: DataTypes.INTEGER,
			companyId: DataTypes.INTEGER,
			description: DataTypes.TEXT,
			delete: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Celeb_info',
		},
	);
	return Celeb_info;
};
