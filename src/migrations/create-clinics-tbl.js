'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Clinics', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			clinicName: {
				type: Sequelize.STRING,
			},
			clinicAddress: {
				type: Sequelize.STRING,
			},
			clinicDescription: {
				type: Sequelize.TEXT,
			},
			image: {
				type: Sequelize.TEXT,
			},
			doctorId: {
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
		await queryInterface.dropTable('Clinics');
	},
};
