import { makeAutoObservable } from 'mobx'
class VendorStore {
	vendorName = ''
	vendorId = ''
	vendorsArray = []
	constructor() {
		makeAutoObservable(this)
	}
}

const vendorStore = new VendorStore()
export default vendorStore
