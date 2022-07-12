import Vendor from './Vendor'
import vendorStore from 'stores/VendorStore'
class Form {
	constructor() {}

	async submitHandler(e) {
		e.preventDefault()
		const vendor = new Vendor()
		await vendor.create()
	}
	changeHandler(e) {
		const { id, value } = e.target
		switch (id) {
			case 'vendor':
				vendorStore.vendorName = value
				break
			default:
				break
		}
	}
}

export const form = new Form()
