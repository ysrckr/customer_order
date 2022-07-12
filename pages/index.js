import Header from '@comps/layout/Header'
import Footer from '@comps/layout/Footer'
import Form from '@comps/layout/Form'
import FormInput from '@comps/layout/FormInput'
import SubmitButton from '@comps/layout/SubmitButton'
import MainContainer from '@comps/layout/MainContainer'
import { form } from '@classes/Form'

export default function Home() {
	const { submitHandler, changeHandler } = form
	return (
		<>
			<Header />

			<MainContainer>
				<Form submitHandler={submitHandler}>
					<FormInput
						label={'Vendor'}
						id={'vendor'}
						changeHandler={changeHandler}
					/>
					<SubmitButton />
				</Form>
			</MainContainer>

			<Footer />
		</>
	)
}

export async function getServerSideProps() {
	return {
		props: {},
	}
}
