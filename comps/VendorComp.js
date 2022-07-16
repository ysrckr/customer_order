import DeleteButton from './layout/DeleteButton'
import { useState } from 'react'
import axios from 'axios'

const VendorComp = ({ vendors }) => {
	const [vendorState, setVendorState] = useState(vendors)
	const deleteVendor = async id => {
		try {
			await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/vendors/${id}`)
			setVendorState(vendorState.filter(v => v.id !== id))
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<>
			<div>
				<ul>
					{vendorState.map(vendor => (
						<li key={vendor.id} data-id={vendor.id}>
							{vendor.name}{' '}
							<DeleteButton dataId={vendor.id} deleteItem={deleteVendor} />
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
export default VendorComp
