import vendorStore from 'stores/VendorStore'
class Vendor {
	#name
	#vendorStore
	constructor(name) {
		this.#name = name
		this.#vendorStore = vendorStore
	}
	get name() {
		return this.#name
	}
	set name(name) {
		this.#name = name
	}
}
export default Vendor
