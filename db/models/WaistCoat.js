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
		suit_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			foreignKey: true,
			references: {
				model: 'Suits',
			},
		},
	},
	{
		sequelize,
		modelName: 'Waistcoat',
	}
)

export default Waistcoat
