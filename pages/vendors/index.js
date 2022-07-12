import Header from '@comps/layout/Header'
import Footer from '@comps/layout/Footer'
import Form from '@comps/layout/Form'
import FormInput from '@comps/layout/FormInput'
import SubmitButton from '@comps/layout/SubmitButton'
import MainContainer from '@comps/layout/MainContainer'
import { vendorForm } from '@classes/Form'

const vendors = () => {
	const { submitHandler, changeHandler } = vendorForm
	return (
		<>
			<Header />

			<MainContainer>
				<Form submitHandler={submitHandler}>
					<FormInput
						label="Vendor"
						id="vendor"
						placeholder="Vendor Name"
						changeHandler={changeHandler}
					/>
					<SubmitButton buttonLabel="Create Vendor" />
				</Form>
			</MainContainer>

			<Footer />
		</>
	)
}
export default vendors
