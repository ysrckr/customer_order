import Header from '@comps/layout/Header'
import Footer from '@comps/layout/Footer'
import MainContainer from '@comps/layout/MainContainer'
import Form from '@comps/layout/Form'
import FormSelect from '@comps/layout/FormSelect'
import Vendor from '@classes/Vendor'

export default function Home({ vendors }) {
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

export async function getServerSideProps() {
	const vendors = await Vendor.getAll()

	return {
		props: {
			vendors,
		},
	}
}
