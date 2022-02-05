'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addConstraint('peliculas_o_series', {
			fields: ['genero_id'],
			type: 'foreign key',
			name: 'genero_id_FK',
			references: {
				table: 'generos',
				field: 'id',
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL',
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('peliculas_o_series', 'genero_id_FK');
	},
};
