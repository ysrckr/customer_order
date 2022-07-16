import { observer } from 'mobx-react'

const DeleteButton = ({ dataId, deleteItem }) => {
	return (
		<div>
			<button
				className="bg-red-500"
				onClick={() => deleteItem(dataId)}
				data-id={dataId}
			>
				Delete
			</button>
		</div>
	)
}
export default observer(DeleteButton)
