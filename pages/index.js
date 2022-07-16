import Header from '@comps/layout/Header'
import Footer from '@comps/layout/Footer'
import MainContainer from '@comps/layout/MainContainer'
import Form from '@comps/layout/Form'
import FormSelect from '@comps/layout/FormSelect'
import { observer } from 'mobx-react'
import axios from 'axios'
import vendorStore from '@stores/VendorStore'

const Home = ({ vendors }) => {
	vendorStore.vendorsArray = vendors
	return (
		<>
			<Header
				title="Customer Order"
				desc="Receive Orders From Customers"
				headerTitle="Home"
			/>
			<MainContainer>
				<h1>Home</h1>
				<Form>
					<FormSelect id="vendorAll" label="Select Vendor" options={vendors} />
				</Form>
			</MainContainer>
			<Footer />
		</>
	)
}
export default observer(Home)

export const getServerSideProps = async ctx => {
	const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/vendors`)
	const vendors = await res.data

	return {
		props: {
			vendors,
		},
	}
}
