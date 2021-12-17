import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CreateNewGame.css';
import Header from '../Header/Header';
import DefaultButton from '../Button/DefaultButton';

const CreateNewGame = () => {

	const [title, setTitle] = useState('');
	const [scenario, setScenario] = useState('');
	const [member, setMember] = useState('');
	const [members, setMembers] = useState([]);

	let history = useHistory();

	const handleChangeTitle = (e) => {
		console.log(e.target.value)
		setTitle(e.target.value);
		console.log(title)
	}

	const handleChangeScenario = (e) => {
		console.log(e.target.value)
		setScenario(e.target.value);
	}

	const handleChangeMember = (e) => {
		console.log(e.target.value)
		setMember(e.target.value);
		// setMember([...member, e.target.value])
	}

	const addMember = (e) => {
		e.preventDefault();
		if(member === '') return
		setMembers([...members, member]);
		setMember('');
	}

	const removeMember = (index) => {
		let newMembersList = [...members]
		newMembersList.splice(index,1)
		console.log(newMembersList);
		setMembers(newMembersList)
		console.log(members);

		
		// newMembersList.splice(index,1)
		// console.log(newMembersList);
		// setMembers(newMembersList)
		// console.log(members);

		// const newM = members.splice(index,1)
		// console.log(newM);
		// setMembers([...members, newM])
		// console.log(members);

		// console.log(members);
		// const newMembersList = [...members].filter((m,mIndex) => mIndex !== index);
		// setMembers(newMembersList)
		// console.log(index)
		
	}
	console.log(members);

	const handleSubmit = () => {
		history.push('/edit');
	}

	return(
		<div className="createNewGameWrapper">
		<header className="createNewGameHeader">
			<Header />
		</header>
		<h1>Create New Game</h1>
		<form className="createNewGameForm">
			<label>
				<h2 className="createNewGameH2" >Title:</h2>
				<input className="inputTitle" type="text" value={title} onChange={handleChangeTitle} />
				{/* <p>{title}</p> */}
			</label>
			<label>
				<h2 className="createNewGameH2" >Scenario:</h2>
				<input className="inputScenario" type="textarea" value={scenario} onChange={handleChangeScenario} />
				{/* <p>{scenario}</p> */}
			</label>
			<label>
				<h2 className="createNewGameH2" >Member:</h2>
				<input type="text" value={member} onChange={handleChangeMember}/>
				
			</label>
			{/* <p>{member}</p> */}
			<button className="addMember"onClick={addMember}>+ Add new member</button>

			<ul className="membersList">
				{ members.map((m, index) => (
				<li key={ index }>{m}<button className="removeButton" onClick={ () => removeMember(index)}>Remove</button></li>
				))}
			</ul>

			<DefaultButton ButtonName="ADD GAME" onClick={handleSubmit}/>
		</form>
		</div>
	)
};

export default CreateNewGame;