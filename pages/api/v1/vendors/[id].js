import Vendor from 'db/models/Vendor'

const handler = async (req, res) => {
	switch (req.method) {
		case 'GET':
			try {
				const vendor = await Vendor.findOne({
					where: {
						id: req.query.id,
					},
				})
				res.status(200).json(vendor)
			} catch (err) {
				res.status(500).json({
					error: err.message,
				})
			}
			break
		case 'POST':
			try {
				const vendor = await Vendor.update(
					{
						name: req.body.name,
					},
					{
						where: {
							id: req.query.id,
						},
					}
				)
				res.status(200).json(vendor)
			} catch (err) {
				res.status(500).json({
					error: err.message,
				})
			}
			break
		case 'PUT':
			try {
				const vendor = await Vendor.update(
					{
						name: req.body.name,
					},
					{
						where: {
							id: req.query.id,
						},
					}
				)
				res.status(200).json(vendor)
			} catch (err) {
				res.status(500).json({
					error: err.message,
				})
			}
			break
		case 'PATCH':
			try {
				const vendor = await Vendor.update(
					{
						name: req.body.name,
					},
					{
						where: {
							id: req.query.id,
						},
					}
				)
				res.status(200).json(vendor)
			} catch (err) {
				res.status(500).json({
					error: err.message,
				})
			}
			break
		case 'DELETE':
			try {
				const vendor = await Vendor.destroy({
					where: {
						id: req.query.id,
					},
				})
				res.status(200).json(vendor)
			} catch (err) {
				res.status(500).json({
					error: err.message,
				})
			}
			break
		default:
			res.status(405).json({ error: 'Method not allowed' }).end()
	}
}
export default handler
