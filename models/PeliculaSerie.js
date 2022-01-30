'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class PeliculaSerie extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.personajeId = this.hasMany(models.Personaje, {
				foreignKey: 'personaje_id',
			});

            this.generoId = this.hasMany(models.Genero, {
				foreignKey: 'genero_id',
			});
		}
	}
	PeliculaSerie.init(
		{
			imagen: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			titulo: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			fecha_de_creacion: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			calificacion: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'PeliculaSerie',
			tableName: 'peliculas_o_series',
		}
	);
	return Pelicula - Serie;
};
