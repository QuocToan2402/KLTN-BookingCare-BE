'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Markdown_doc extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Markdown_doc.init(
		{
			celebId: DataTypes.INTEGER,
			companyId: DataTypes.INTEGER,
			specialtyId: DataTypes.INTEGER,
			contentHTML: DataTypes.TEXT,
			contentMarkdown: DataTypes.TEXT,
			markdown_docDescription: DataTypes.TEXT,
			delete: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Markdown_doc',
		},
	);
	return Markdown_doc;
};
