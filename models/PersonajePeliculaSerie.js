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
				foreignKey: 'id', //hace referencia a las columna id de personaje
			});
			this.pelicula_o_serie_id = this.hasMany(models.PeliculaSerie, {
				foreignKey: 'id', //hace referencia a las columna id de pelicula_o_serie
			});
		}
	}
	PersonajePeliculaSerie.init(
		{
			personaje_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Personaje',
					key: 'id',
				},
			},
			pelicula_o_serie_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'PeliculaSerie',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'PersonajePeliculaSerie',
			tableName: 'personaje_pelicula-serie_crossreference',
            timestamps: true,
            underscored: true,
		}
	);
	return PersonajePeliculaSerie;
};
