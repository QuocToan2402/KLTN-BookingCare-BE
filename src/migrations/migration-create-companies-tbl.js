'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Companies', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			companyName: {
				type: Sequelize.STRING,
			},
			companyAddress: {
				type: Sequelize.STRING,
			},
			companyDescription: {
				type: Sequelize.TEXT,
			},
			image: {
				type: Sequelize.STRING,
			},
			celebId: {
				type: Sequelize.INTEGER,
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
		await queryInterface.dropTable('Companies');
	},
};
