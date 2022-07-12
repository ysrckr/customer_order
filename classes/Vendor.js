import axios from 'axios'
import vendorStore from 'stores/VendorStore'

class Vendor {
	#name
	constructor() {
		this.#name = vendorStore.vendorName
	}
	async create() {
		const vendor = await axios.post('/api/v1/vendors', {
			name: this.#name,
		})
	}
}
export default Vendor
