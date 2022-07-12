import Header from '@comps/layout/Header'
import Footer from '@comps/layout/Footer'
import MainContainer from '@comps/layout/MainContainer'

export default function Home() {
	return (
		<>
			<Header />
			<MainContainer>
				<h1>Home</h1>
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
