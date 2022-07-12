import sequelize from '../../../db/connection'

const handler = async (req, res) => {
	const testConnection = async () => {
		try {
			await sequelize.authenticate()
			console.log('Connection has been established successfully.')
		} catch (error) {
			console.error('Unable to connect to the database:', error)
		}
	}

	if (req.method === 'GET') {
		testConnection()
		res.status(200).json({
			message: 'Connection has been established successfully.',
		})
	}
}

export default handler
