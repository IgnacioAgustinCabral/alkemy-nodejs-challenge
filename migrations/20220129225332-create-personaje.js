'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('personajes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			imagen: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			nombre: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			edad: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			peso: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			historia: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('personajes');
	},
};
