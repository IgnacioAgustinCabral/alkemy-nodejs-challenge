'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class PersonajePeliculaSerie extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.personaje_id = this.hasMany(models.Personaje, {
				foreignKey: 'personaje_id',
			});
			this.pelicula_o_serie_id = this.hasMany(models.PeliculaSerie, {
				foreignKey: 'pelicula_o_serie_id',
			});
		}
	}
	PersonajePeliculaSerie.init(
		{
			personaje_id: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Personaje',
				key: 'id',
			},
		},
		{
			pelicula_o_serie_id: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'PeliculaSerie',
				key: 'id',
			},
		},
		{
			sequelize,
			modelName: 'PersonajePeliculaSerie',
			tableName: 'personaje_pelicula-serie_crossreference',
		}
	);
	return PersonajePeliculaSerie;
};
