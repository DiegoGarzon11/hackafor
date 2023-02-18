function djs(sequelize, DataTypes) {
	const dj = sequelize.define(
		'djs',
		(cols = {
			id: { as: 'primaryKey', type: DataTypes.INTEGER, primaryKey: true },
			nombre: { type: DataTypes.STRING(200) },
			nacionalidad: { type: DataTypes.STRING(200) },
			imagen: { type: DataTypes.STRING(200) },
			cancion: { type: DataTypes.STRING(200) },
			tomorroland: { type: DataTypes.BOOLEAN },
			tomorroland: { type: DataTypes.STRING(200) },
		}),
		(config = { camelCase: false, tablename: 'djs', timestamps: false })
	);
	dj.associate = function (models) {
		dj.belongsTo(models.generos, {
			as: 'generos',
			foreingKey: 'generosiId',
		});
	};
	return dj;
}
module.exports = djs;
