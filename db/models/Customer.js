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
		vendor_id: {
			type: DataTypes.INTEGER,
			foreignKey: true,
			allowNull: false,
			references: {
				model: 'Vendors',
			},
		},
	},
	{
		sequelize,
		modelName: 'Customer',
	}
)

export default Customer
