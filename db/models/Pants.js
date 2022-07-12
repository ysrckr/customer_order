import { DataTypes, Model } from 'sequelize'
import sequelize from '../connection'

class Pants extends Model {}

Pants.init(
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
		modelName: 'Pants',
	}
)
Pants.belongsTo(Suit, {
	foreignKey: 'suit_id',
})
export default Pants
