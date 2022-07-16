import Header from '@comps/layout/Header'
import Footer from '@comps/layout/Footer'
import Form from '@comps/layout/Form'
import FormInput from '@comps/layout/FormInput'
import SubmitButton from '@comps/layout/SubmitButton'
import MainContainer from '@comps/layout/MainContainer'
import VendorComp from '@comps/VendorComp'
import { useState } from 'react'
import vendorStore from '@stores/VendorStore'
import { observer } from 'mobx-react'
import axios from 'axios'

const VendorsHome = ({ vendors }) => {
	const [vendorState, setVendorState] = useState(vendors)
	const [vendorName, setVendorName] = useState('')
	const changeHandler = e => {
		setVendorName(e.target.value)
		console.log(vendorName)
	}
	const createVendor = async e => {
		try {
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/vendors`,
				{
					name: vendorName,
				}
			)
			const vendor = await res.data
			console.log(vendor)
			setVendorState([...vendorState, vendor])
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<Header
				title="Vendors"
				desc="See All Vendors and Add New Ones"
				headerTitle="Vendors"
			/>

			<MainContainer>
				<Form submitHandler={createVendor}>
					<FormInput
						label="Vendor"
						id="vendor"
						placeholder="Vendor Name"
						changeHandler={changeHandler}
					/>
					<SubmitButton buttonLabel="Create Vendor" />
				</Form>
				<VendorComp vendors={vendorState} />
			</MainContainer>
			<Footer />
		</>
	)
}
export default observer(VendorsHome)

export const getServerSideProps = async ctx => {
	const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/vendors`)
	const vendors = await res.data
	return {
		props: {
			vendors,
		},
	}
}
