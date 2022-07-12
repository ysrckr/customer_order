import Vendor from './Vendor'
import Order from './Order'
import Measurement from './Measurement'
import Pants from './Pants'
import Jacket from './Jacket'
import Waistcoat from './WaistCoat'
import Customer from './Customer'
import Suit from './Suit'

Vendor.hasMany(Customer, {
	foreignKey: 'customer_id',
})

Customer.belongsTo(Vendor, {
	foreignKey: 'vendor_id',
})
Customer.hasMany(Order, {
	foreignKey: 'order_id',
})
Customer.hasOne(Measurement, {
	foreignKey: 'measurement_id',
})

Measurement.belongsTo(Customer, {
	foreignKey: 'customer_id',
})

Order.belongsTo(Customer, {
	foreignKey: 'customer_id',
})
Order.hasMany(Suit, {
	foreignKey: 'suit_id',
})

Suit.belongsTo(Order, {
	foreignKey: 'order_id',
})
Suit.hasOne(Pants, {
	foreignKey: 'pants_id',
})
Suit.hasOne(Jacket, {
	foreignKey: 'jacket_id',
})
Suit.hasOne(Waistcoat, {
	foreignKey: 'waistcoat_id',
})

Jacket.belongsTo(Suit, {
	foreignKey: 'suit_id',
})
Pants.belongsTo(Suit, {
	foreignKey: 'suit_id',
})
Waistcoat.belongsTo(Suit, {
	foreignKey: 'suit_id',
})


