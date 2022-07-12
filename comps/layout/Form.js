const Form = ({ children, submitHandler }) => {
	return (
		<div>
			<form onSubmit={submitHandler}>{children}</form>
		</div>
	)
}
export default Form
