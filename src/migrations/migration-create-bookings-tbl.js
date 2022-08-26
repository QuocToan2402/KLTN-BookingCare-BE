'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Bookings', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			statusId: {
				type: Sequelize.STRING,
			},
			celebId: {
				type: Sequelize.INTEGER,
			},
			clientId: {
				type: Sequelize.INTEGER,
			},
			bookingDate: {
				type: Sequelize.DATE,
			},
			time: {
				type: Sequelize.STRING,
			},
			price: {
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
		await queryInterface.dropTable('Bookings');
	},
};
