'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('personaje_pelicula-serie_crossreference', {
			personaje_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			pelicula_o_serie_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('personaje_pelicula-serie_crossreference');
	},
};
