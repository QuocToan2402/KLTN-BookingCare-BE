'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Schedule_bookings', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			currentNumber: {
				type: Sequelize.INTEGER,
			},
			dateBooking: {
				type: Sequelize.DATE,
			},
			time: {
				type: Sequelize.STRING,
			},
			celebId: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Schedule_bookings');
	},
};
