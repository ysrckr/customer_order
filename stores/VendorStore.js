import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class VendorStore {
	vendorId = ''
	vendorName = ''
	vendorList = []
	constructor(vendorList) {
		makeAutoObservable(this)
	}
	setVendorList(vendorList) {
		this.vendorList = vendorList
	}
	vendorList() {
		return this.vendorList
	}
}

const vendorStore = new VendorStore()
export default vendorStore
