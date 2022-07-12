import Header from '@comps/layout/Header'
import Footer from '@comps/layout/Footer'
export default function Home() {
	return (
		<>
			<Header />
			<main className="container mx-auto">
				<div>
					<h1>Hello Next.js</h1>
				</div>
			</main>
			<Footer />
		</>
	)
}
