import { placeholder } from "@cloudinary/react"

const FormInput = ({ label, id, changeHandler, placeholder }) => {
	return (
		<div className="grid col-auto gap-3 justify-center mb-3">
			<label htmlFor={id}>{label}</label>
			<input className="max-w-sm" type="text" placeholder={`Enter ${placeholder}`} id={id} name={id} onChange={changeHandler}/>
		</div>
	)
}
export default FormInput
