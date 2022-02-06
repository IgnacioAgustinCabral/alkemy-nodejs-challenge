'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Personaje extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Personaje.init(
		{
			imagen: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			edad: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			peso: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			historia: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Personaje',
			tableName: 'personajes',
            timestamps: true,
            underscored: true,
		}
	);
	return Personaje;
};
