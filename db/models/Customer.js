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
	},
	{
		sequelize,
		modelName: 'Customer',
	}
)
Customer.belongsTo(Vendor, {
	foreignKey: 'vendor_id',
})
Customer.hasMany(Order, {
	foreignKey: 'order_id',
})
Customer.hasOne(Measurement, {
	foreignKey: 'measurement_id',
})

export default Customer
