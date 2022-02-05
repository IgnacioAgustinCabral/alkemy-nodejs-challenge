'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addConstraint('personaje_pelicula-serie_crossreference', {
            fields:['personaje_id'],
            type: 'foreign key',
            name: 'personaje_id_crossreference_FK',
            references: {
                table: 'personajes',
                field : 'id'
            },
            onUpdate: 'CASCADE',
			onDelete: 'SET NULL',
        });

        await queryInterface.addConstraint('personaje_pelicula-serie_crossreference', {
            fields:['pelicula_o_serie_id'],
            type: 'foreign key',
            name: 'pelicula_o_serie_id_crossreference_FK',
            references: {
                table: 'peliculas_o_series',
                field : 'id'
            },
            onUpdate: 'CASCADE',
			onDelete: 'SET NULL',
        });
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('personaje_pelicula-serie_crossreference', 'personaje_id_crossreference_FK');
		await queryInterface.removeConstraint('personaje_pelicula-serie_crossreference', 'pelicula_o_serie_id_crossreference_FK');
	},
};
