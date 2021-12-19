import { useState } from 'react';
import './EditGame.css';

const EditGame = (props) => {

	const [title, setTitle] = useState('');
	const [scenario, setScenario] = useState('');
	const [members, setMembers] = useState([]);

	return (
		<>
		<h1>Edit Game</h1>
		<p>{props.title}</p>
		<p>{props.scenario}</p>
	
		</>
	)
}

export default EditGame;