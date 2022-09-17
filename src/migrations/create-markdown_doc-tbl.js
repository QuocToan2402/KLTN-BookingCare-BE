'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Markdown_doc', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			doctorId: {
				type: Sequelize.INTEGER,
			},
			clinicId: {
				type: Sequelize.INTEGER,
			},
			specialtyId: {
				type: Sequelize.INTEGER,
			},
			contentHTML: {
				type: Sequelize.TEXT,
			},
			contentMarkdown: {
				type: Sequelize.TEXT,
			},
			markdown_docDescription: {
				type: Sequelize.TEXT,
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
		await queryInterface.dropTable('Markdown_doc');
	},
};
