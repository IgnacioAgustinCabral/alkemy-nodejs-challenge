'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			'personaje_pelicula-serie_crossreference',
			{
				personaje_id: {
					allowNull: false,
					primaryKey: true,
					autoIncrement: false,
					type: Sequelize.INTEGER,
				},
				pelicula_o_serie_id: {
					allowNull: false,
					primaryKey: true,
					autoIncrement: false,
					type: Sequelize.INTEGER,
				},
				created_at: {
					allowNull: false,
					type: Sequelize.DATE,
				},
				updated_at: {
					allowNull: false,
					type: Sequelize.DATE,
				},
			}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('personaje_pelicula-serie_crossreference');
	},
};
