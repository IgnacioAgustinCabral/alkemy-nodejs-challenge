'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('personaje_pelicula-serie_crossreference', {
			personaje_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			pelicula_o_serie_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
              },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
              }
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('personaje_pelicula-serie_crossreference');
	},
};
