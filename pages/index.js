import Header from '@comps/layout/Header'
import Footer from '@comps/layout/Footer'
import Form from '@comps/layout/Form'
import FormInput from '@comps/layout/FormInput'
import SubmitButton from '@comps/layout/SubmitButton'
import MainContainer from '@comps/layout/MainContainer'
export default function Home() {
	return (
		<>
			<Header />

			<MainContainer>
				<Form>
					<FormInput />
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
