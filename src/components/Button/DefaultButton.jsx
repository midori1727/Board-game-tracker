import './DefaultButton.css';

const DefaultButton = (props) => {

	return (
		<>
		<button id="Button" onClick={props.onClick} >{props.ButtonName}</button>
		</>
	)
}

export default DefaultButton;