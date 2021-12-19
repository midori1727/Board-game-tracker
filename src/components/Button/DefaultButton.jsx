import './DefaultButton.css';

const DefaultButton = (props) => {

	return (
		<>
		<button id="Button"　onClick={props.onClick} disabled={props.disabled}>{props.ButtonName}</button>
		</>
	)
}

export default DefaultButton;