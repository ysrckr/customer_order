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
		modelName: 'Suit',
	}
)

export default Suit
