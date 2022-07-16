const FormInput = ({ label, id, changeHandler, placeholder, dataType }) => {
	return (
		<div className="grid col-auto gap-3 justify-center mb-3">
			<label htmlFor={id}>{label}</label>
			<input
				className="max-w-sm"
				type="text"
				placeholder={`Enter ${placeholder}`}
				id={id}
				name={id}
				onChange={changeHandler}
				data-type={dataType}
			/>
		</div>
	)
}
export default FormInput
