const FormSelect = ({ id, label, options }) => {
	return (
		<div>
			<label htmlFor={id}></label>
			<select id={id} name={id} defaultValue={label}>
				<option disabled value={label}>
					{label}
				</option>
				{options.map(option => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	)
}
export default FormSelect
