import { DataTypes, Model } from 'sequelize'
import sequelize from '../connection'

class Waistcoat extends Model {}

Waistcoat.init(
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
		modelName: 'Waistcoat',
	}
)
Waistcoat.belongsTo(Suit, {
	foreignKey: 'suit_id',
})
export default Waistcoat
