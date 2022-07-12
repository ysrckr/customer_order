import { DataTypes, Model } from 'sequelize'
import sequelize from '../connection'

class Customer extends Model {}

Customer.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		measurement_id: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			references: {
				model: 'Measurement',
			},
		},
		order_id: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			references: {
				model: 'Order',
			},
		},
	},
	{
		sequelize,
		modelName: 'Customer',
	}
)
