import DeleteButton from './layout/DeleteButton'
import Vendor from '@classes/Vendor'

const VendorComp = ({ vendors }) => {
	return (
		<>
			<div>
				<ul>
        {vendors.map(vendor => (
						<li key={vendor.id}>
							{vendor.name}{' '}
							<DeleteButton dataId={vendor.id} dataType="vendor" />
						</li>
					))}
        </ul>
			</div>
		</>
	)
}
export default VendorComp


