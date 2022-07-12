import { DataTypes, Model } from 'sequelize'
import sequelize from '../connection'

class Suit extends Model {}

Suit.init(
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
		modelName: 'Suit',
	}
)
Suit.belongsTo(Order, {
	foreignKey: 'order_id',
})
Suit.hasOne(Pants, {
	foreignKey: 'pants_id',
})
Suit.hasOne(Jacket, {
	foreignKey: 'jacket_id',
})
Suit.hasOne(WaistCoat, {
	foreignKey: 'waistcoat_id',
})
export default Suit
