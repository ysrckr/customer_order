import Handlers from '@classes/Handlers'
const DeleteButton = ({ dataId, dataType }) => {
	const { deleteItem } = Handlers
	return (
		<div>
			<button
				className="bg-red-500"
				onClick={deleteItem}
				data-type={dataType}
				data-id={dataId}
			>
				Delete
			</button>
		</div>
	)
}
export default DeleteButton
