'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Doctor_info', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			doctorId: {
				type: Sequelize.INTEGER,
			},
			priceId: {
				type: Sequelize.STRING,
			},
			provinceId: {
				type: Sequelize.STRING,
			},
			paymentId: {
				type: Sequelize.STRING,
			},
			clinicId: {
				type: Sequelize.INTEGER,
			},
			note: {
				type: Sequelize.TEXT,
			},
			count: {
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
		await queryInterface.dropTable('Doctor_info');
	},
};
