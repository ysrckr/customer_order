import { DataTypes, Model } from 'sequelize'
import sequelize from '../connection'


class Measurement extends Model {}

Measurement.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		size: {
			type: DataTypes.INTEGER,
		},
		chest: {
			type: DataTypes.INTEGER,
		},
		shoulder: {
			type: DataTypes.INTEGER,
		},
		jacket_length: {
			type: DataTypes.INTEGER,
		},
		sleeve_length: {
			type: DataTypes.INTEGER,
		},
		bicep: {
			type: DataTypes.INTEGER,
		},
		waist: {
			type: DataTypes.INTEGER,
		},
		hip: {
			type: DataTypes.INTEGER,
		},
		thigh: {
			type: DataTypes.INTEGER,
		},
		knee: {
			type: DataTypes.INTEGER,
		},
		pants_length: {
			type: DataTypes.INTEGER,
		},
		customer_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			foreignKey: true,
			references: {
				model: 'Customers',
			},
		}
	},
	{
		sequelize,
		modelName: 'Measurement',
	}
)

export default Measurement
