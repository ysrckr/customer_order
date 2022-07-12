import { DataTypes, Model } from 'sequelize'
import sequelize from '../connection'

class Order extends Model {}

Order.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		customer_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			foreignKey: true,
			references: {
				model: 'Customers',
			},
		},
	},
	{
		sequelize,
		modelName: 'Order',
	}
)

export default Order
