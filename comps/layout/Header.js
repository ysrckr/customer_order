import Head from 'next/head'
const Header = ({title, desc, headerTitle}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={desc} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<div className="container mx-auto p-4">
					<h1 className="text-center">{headerTitle}</h1>
				</div>
			</header>
		</>
	)
}
export default Header
