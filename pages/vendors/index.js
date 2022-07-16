import Header from '@comps/layout/Header'
import Footer from '@comps/layout/Footer'
import Form from '@comps/layout/Form'
import FormInput from '@comps/layout/FormInput'
import SubmitButton from '@comps/layout/SubmitButton'
import MainContainer from '@comps/layout/MainContainer'
import VendorComp from '@comps/VendorComp'
import vendorStore from '@stores/VendorStore'
import { observer } from 'mobx-react'
import axios from 'axios'

const vendorsHome = ({vendors}) => {
	const changeHandler = e => {
		vendorStore.vendorName = e.target.value
	}
	const createVendor = async e => {
		e.preventDefault()
		const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/vendors`, {
			name: vendorStore.vendorName,
		})
		const vendor = await res.data
		vendorStore.vendorsArray = [...vendorStore.vendorsArray, vendor]
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
				<VendorComp vendors={vendors}/>
			</MainContainer>
			<Footer />
		</>
	)
}
export default observer(vendorsHome)

export const getServerSideProps = async ctx => {
	const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/vendors`)
	const vendors = await res.data
	return {
		props: {
			vendors,
		},
	}
}
