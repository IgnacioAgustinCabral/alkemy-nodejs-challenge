'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('peliculas_o_series', {
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
			titulo: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			fecha_de_creacion: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			calificacion: {
				type: Sequelize.INTEGER,
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
			genero_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('peliculas_o_series');
	},
};
