const FormInput = ({ label, id, changeHandler }) => {
	return (
		<div className="grid col-auto gap-3 justify-center mb-3">
			<label htmlFor={id}>{label}</label>
			<input className="max-w-sm" type="text" id={id} name={id} onChange={changeHandler}/>
		</div>
	)
}
export default FormInput
