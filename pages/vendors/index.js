import Header from '@comps/layout/Header'
import Footer from '@comps/layout/Footer'
import Form from '@comps/layout/Form'
import FormInput from '@comps/layout/FormInput'
import SubmitButton from '@comps/layout/SubmitButton'
import MainContainer from '@comps/layout/MainContainer'
import VendorComp from '@comps/VendorComp'
import Handlers from '@classes/Handlers'
import vendorStore from '@stores/vendorStore'
import Vendor from '@classes/Vendor'

const vendorsHome = ({ vendors }) => {
	const { submitHandler, changeHandler } = Handlers

	return (
		<>
			<Header
				title="Vendors"
				desc="See All Vendors and Add New Ones"
				headerTitle="Vendors"
			/>

			<MainContainer>
				<Form submitHandler={submitHandler}>
					<FormInput
						label="Vendor"
						id="vendor"
						placeholder="Vendor Name"
						changeHandler={changeHandler}
						DataType="vendor"
					/>
					<SubmitButton buttonLabel="Create Vendor" />
				</Form>
				<VendorComp vendors={vendors} />
			</MainContainer>

			<Footer />
		</>
	)
}
export default vendorsHome

export async function getServerSideProps() {
	const vendors = await Vendor.getAll()
	vendorStore.vendorsArray = [...vendors]
	return {
		props: {
			vendors,
		},
	}
}
