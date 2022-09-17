'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			email: DataTypes.STRING,
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			image: DataTypes.TEXT,
			address: DataTypes.STRING,
			gender: DataTypes.STRING,
			phonenumber: DataTypes.STRING,
			positionId: DataTypes.STRING,
			roleId: DataTypes.STRING,
			delete: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'User',
		},
	);
	return User;
};
