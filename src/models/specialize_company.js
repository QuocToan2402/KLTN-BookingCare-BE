'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Specialize_company extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Specialize_company.init(
		{
			celebId: DataTypes.INTEGER,
			companyId: DataTypes.INTEGER,
			specialtyId: DataTypes.INTEGER,
			delete: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Specialize_company',
		},
	);
	return Specialize_company;
};
