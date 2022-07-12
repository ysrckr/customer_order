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
	},
	{
		sequelize,
		modelName: 'Order',
	}
)
Order.belongsTo(Customer, {
	foreignKey: 'customer_id',
})
Order.hasMany(Suit, {
	foreignKey: 'suit_id',
})
export default Order
