import { DataTypes, Model } from 'sequelize'
import sequelize from '../connection'

class Jacket extends Model {}

Jacket.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
		},
		img_url: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: 'Jacket',
	}
)
Jacket.belongsTo(Suit, {
	foreignKey: 'suit_id',
})
export default Jacket
