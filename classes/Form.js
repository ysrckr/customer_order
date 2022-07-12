import Vendor from './Vendor'
import vendorStore from 'stores/VendorStore'
class Form {
	#mode
	constructor(mode) {
		this.#mode = mode
	}

	async submitHandler(e) {
		e.preventDefault()
		switch (this.#mode) {
			case 'vendor':
				const vendor = new Vendor()
				await vendor.create()
				break
			default:
				break
		}
	}
	changeHandler(e) {
		const { value } = e.target
		switch (this.#mode) {
			case 'vendor':
				vendorStore.vendorName = value
				break
			default:
				break
		}
	}
}

export const vendorForm = new Form('vendor')
