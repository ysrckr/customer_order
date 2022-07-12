import axios from 'axios'
import vendorStore from 'stores/VendorStore'

class Vendor {
	#name
	#id
	constructor() {
		this.#name = vendorStore.vendorName
		this.#id = ''
	}
	get id() {
		return this.#id
	}
	set id(id) {
		this.#id = id
	}
	get name() {
		return this.#name

	}
	set name(name) {
		this.#name = name
	}
	async create() {
		const vendor = await axios.post('/api/v1/vendors', {
			name: this.#name,
		})
		const { data } = vendor
		vendorStore.vendorId = data.id
		this.#id = data.id
	}
}
export default Vendor
