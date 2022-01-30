'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Genero extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Genero.init(
		{
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			imagen: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Genero',
			tableName: 'generos',
		}
	);
	return Genero;
};
