'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Allcodes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			key: {
				type: Sequelize.STRING,
			},
			type: {
				type: Sequelize.STRING,
			},
			valueEn: {
				type: Sequelize.STRING,
			},
			valueVi: {
				type: Sequelize.STRING,
			},
			delete: {
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			deleteAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Allcodes');
	},
};
