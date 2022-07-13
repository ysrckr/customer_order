import Vendor from '@classes/Vendor'
class Handlers {
	static deleteItem(e) {
		e.preventDefault()
		switch (e.target.dataset.type) {
			case 'vendor':
				const vendorId = e.target.dataset.id
				console.log(vendorId)
				Vendor.delete(vendorId)
				break
			default:
		}
	}
	static changeHandler(e) {
		const type = e.target.dataset.type
		switch (type) {
			case 'vendor':
				vendorStore.vendorName = value
				break
			default:
				break
		}
	}
	static async submitHandler(e) {
		e.preventDefault()
		const type = e.target.dataset.type
		switch (type) {
			case 'vendor':
				const vendor = new Vendor()
				await vendor.create()
				break
			default:
				break
		}
	}
}

export default Handlers
