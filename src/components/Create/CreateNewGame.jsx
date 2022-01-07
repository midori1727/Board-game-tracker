import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './CreateNewGame.css';
import Header from '../Header/Header';
import DefaultButton from '../Button/DefaultButton';

import { useDispatch} from 'react-redux';
import {gameListAddAction,gameListRemoveAction} from '../../redux/actions/index'
import { v4 as uuidv4 } from 'uuid';


const CreateNewGame = () => {

	const dispatch = useDispatch();
	let history = useHistory();

	const [gameData, setGameData] = useState({});
	const id = uuidv4();
	const [title, setTitle] = useState('');
	const [scenario, setScenario] = useState('');
	const [member, setMember] = useState('');
	const [points, setPoints] = useState('');
	const [memberAndPoints, setMemberAndPoints] = useState([]);
	const [time, setTime] = useState('');
	const [comment, setComment] = useState('');
	

	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
	}

	const handleChangeScenario = (e) => {
		setScenario(e.target.value);
	}

	const handleChangeMember = (e) => {
		setMember(e.target.value);
	}

	const handleChangePoints = (e) => {
		setPoints(e.target.value);
	}

	const handleChangeTime = (e) => {
		setTime(e.target.value);
	}

	const handleChangeComment  = (e) => {
		setComment(e.target.value);
	}

	const addMember = (e) => {
		e.preventDefault();
		if(member === '' || points === '') return
		setMemberAndPoints([...memberAndPoints, { 'name': member, 'points': points}]);
		setMember('');
		setPoints('');
	}

	const removeMember = (index) => {
		let newDataList = [...memberAndPoints]
		newDataList.splice(index,1)
		console.log(newDataList);
		setMemberAndPoints(newDataList)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setGameData({'id': id, 'title': title, 'scenario': scenario, 'memberAndPoints': memberAndPoints, 'time': time, 'comment': comment});

		dispatch(gameListAddAction( {
			id: id,
			title: title,
			scenario: scenario,
			memberAndPoints: memberAndPoints,
			time: time,
			comment: comment
		}));
		
		setTitle('');
		setScenario('');
		setMemberAndPoints('');
		setTime('');
		setComment('');
		history.push('/history');
		
	}

	
	return(
		<>
		
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

			{memberAndPoints &&
			<ul>
				{memberAndPoints.map((item, index) => (
					<div key={index}>
					{item.name},{item.points}<button className="removeButton" onClick={ () => removeMember(index)}>Remove</button>
					</div>
				))}
			</ul>
			}

			<label>
				<h2 className="createNewGameH2" >Total time:</h2>
				<input type="text" value={time} onChange={handleChangeTime}/>
			</label>

			<label>
				<h2 className="createNewGameH2" >Comment:</h2>
				<input className="inputComment" type="textarea" value={comment} onChange={handleChangeComment}　required />
			</label>

			<Link to="/history"><DefaultButton ButtonName="ADD GAME" onClick={handleSubmit} /></Link>
			
		</form>
		</div>
		
		</>
	)
};

export default CreateNewGame;