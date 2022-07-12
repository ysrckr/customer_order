import Vendor from '@db/models/Vendor'

const handler = async (req, res) => {
	switch (req.method) {
		case 'GET':
			try {
				const vendors = await Vendor.findAll()
				res.status(200).json(vendors)
			} catch (err) {
				res.status(500).json({
					error: err.message,
				})
			}
			break
		case 'POST':
			try {
				const vendor = await Vendor.create({
					name: req.body.name,
				})
				res.status(201).json(vendor)
			} catch (err) {
				res.status(500).json({
					error: err.message,
				})
			}
			break
		default:
			res.status(405).json({ error: 'Method not allowed' }).end()
			break
	}
}

export default handler
