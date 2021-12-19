import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CreateNewGame.css';
import Header from '../Header/Header';
import DefaultButton from '../Button/DefaultButton';

const CreateNewGame = () => {

	const [title, setTitle] = useState('');
	const [scenario, setScenario] = useState('');
	const [member, setMember] = useState('');
	const [points, setPoints] = useState('');
	const [data, setData] = useState([]);
	const [time, setTime] = useState('');
	const [comment, setComment] = useState('');

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
	}

	const handleChangePoints = (e) => {
		console.log(e.target.value)
		setPoints(e.target.value);
	}

	const handleChangeTime = (e) => {
		console.log(e.target.value)
		setTime(e.target.value);
	}

	const handleChangeComment  = (e) => {
		console.log(e.target.value)
		setComment(e.target.value);
	}

	const addMember = (e) => {
		e.preventDefault();
		if(member === '' || points === '') return
		setData([...data, { name: member, points: points}]);
		setMember('');
	}

	const removeMember = (index) => {
		let newDataList = [...data]
		newDataList.splice(index,1)
		console.log(newDataList);
		setData(newDataList)
	}

	const handleSubmit = () => {
		// if(member === '' || points === '') return
		history.push('/history');
	}

	console.log(title,scenario,data);



	return(
		<div className="createNewGameWrapper">
		<header className="createNewGameHeader">
			<Header />
		</header>
		<h1>Create New Game</h1>
		<form className="createNewGameForm">
			<label>
				<h2 className="createNewGameH2" >Title:</h2>
				<input className="inputTitle" type="text" value={title} onChange={handleChangeTitle} required/>
			</label>

			<label>
				<h2 className="createNewGameH2" >Scenario:</h2>
				<input className="inputScenario" type="textarea" value={scenario} onChange={handleChangeScenario}　required />
			</label>

			<label>
				<h2 className="createNewGameH2" >Member:</h2>
				<input type="text" value={member} onChange={handleChangeMember}/>
			</label>

			<label>
				<h2 className="createNewGameH2" >Points:</h2>
				<input type="text" value={points} onChange={handleChangePoints}/>
			</label>

			<button className="addMember"onClick={addMember}>+ Add new member</button>

			<ul>
				{data.map((item, index) => (
					<div key={index}>
					{item.name},{item.points}<button className="removeButton" onClick={ () => removeMember(index)}>Remove</button>
					</div>
				))}
			</ul>

			<label>
				<h2 className="createNewGameH2" >Total time:</h2>
				<input type="text" value={time} onChange={handleChangeTime}/>
			</label>

			<label>
				<h2 className="createNewGameH2" >Comment:</h2>
				<input className="inputComment" type="textarea" value={comment} onChange={handleChangeComment}　required />
			</label>


			<DefaultButton ButtonName="ADD GAME" onClick={handleSubmit} />
		</form>
		</div>
	)
};

export default CreateNewGame;