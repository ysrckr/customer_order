import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class VendorStore {
	vendorId = ''
	vendorName = ''
	vendorsArray = []
	constructor() {
		makeAutoObservable(this)
	}

}

const vendorStore = new VendorStore()
export default vendorStore
