import { DataTypes, Model } from 'sequelize'
import sequelize from '../connection'

class Vendor extends Model {}

Vendor.init(
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
		modelName: 'Vendors',
	}
)

export default Vendor


