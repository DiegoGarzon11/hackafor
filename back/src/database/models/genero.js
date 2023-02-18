function generos(sequelize, DataTypes) {
	const genero = sequelize.define(
		'generos',
		(cols = {
			id: { as: 'primaryKey', type: DataTypes.INTEGER, primaryKey: true },
			nombre: { type: DataTypes.STRING(200) },
		}),
		(config = { camelCase: false, tablename: 'djs', timestamps: false })
	);

	generos.associate = function (models) {
		genero.belongsTo(models.djs, {
			as: 'generos',
		});
	};
	return genero;
}
module.exports = generos;
