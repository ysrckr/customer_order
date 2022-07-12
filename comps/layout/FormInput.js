const FormInput = ({ label, id }) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input type="text" id={id} name={id} />
		</div>
	)
}
export default FormInput
