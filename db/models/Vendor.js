import {DataTypes, Model} from 'sequelize';
import sequelize from '../connection';


class Vendor extends Model {}

Vendor.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
            model: 'Customer',
        }
    }
},
{
    sequelize,
    modelName: 'Vendor',
})