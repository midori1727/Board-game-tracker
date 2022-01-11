import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {gameListAddAction} from '../../redux/actions/index'
import './CreateNewGame.css';
import Header from '../Header/Header';
import DefaultButton from '../Button/DefaultButton';
import { v4 as uuidv4 } from 'uuid';


const CreateNewGame = () => {

	const dispatch = useDispatch();
	const history = useHistory();
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
	};

	const handleChangeScenario = (e) => {
		setScenario(e.target.value);
	};

	const handleChangeMember = (e) => {
		setMember(e.target.value);
	};

	const handleChangePoints = (e) => {
		setPoints(e.target.value);
	};

	const handleChangeTime = (e) => {
		setTime(e.target.value);
	};

	const handleChangeComment  = (e) => {
		setComment(e.target.value);
	};

	const addMember = (e) => {
		e.preventDefault();
		if(member === '' || points === '') return
		if(points.match(/[^0-9]+/)) return
		setMemberAndPoints([...memberAndPoints, { 'name': member, 'points': points}]);
		setMember('');
		setPoints('');
	};

	const removeMember = (index) => {
		let newDataList = [...memberAndPoints];
		newDataList.splice(index,1);
		setMemberAndPoints(newDataList);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const now = new Date();
		const createdDate = now.toLocaleString();

		if(title === '' || scenario === '' || memberAndPoints.length === 0 || time === '' || comment === '') return;

		dispatch(gameListAddAction( {
			id: id,
			title: title,
			scenario: scenario,
			memberAndPoints: memberAndPoints,
			time: time,
			comment: comment,
			createdDate: createdDate
		}));
		history.push('/history');
	};

	
	return(
		<>
		{/* <div className="createNewGameWrapper"> */}
		<header>
			<Header />
		</header>
		<h1 className="title">Create New Game</h1>
		<div className="createNewGameWrapper">
		<form className="createNewGameForm">
			<label>
				<h2 className="createNewGameH2" >Title:</h2>
				<input className="inputTitle" type="text" value={title} onChange={handleChangeTitle} required/>
			</label>

			<label>
				<h2 className="createNewGameH2" >Scenario:</h2>
				<textarea className="inputScenario" value={scenario} onChange={handleChangeScenario} />
			</label>

			<label>
				<h2 className="createNewGameH2" >Member:</h2>
				<input type="text" value={member} onChange={handleChangeMember}/>
			</label>

			<label>
				<h2 className="createNewGameH2" >Points:</h2>
				<input type="text" value={points} onChange={handleChangePoints}/>
			</label>

			<button className="addMemberButton"onClick={addMember}>+ Add new member</button>

			{memberAndPoints &&
			<ul>
				{memberAndPoints.map((item, index) => (
					<div key={index}>
					{item.name}, {item.points} points
					<button className="removeButton" onClick={ () => removeMember(index)}>Remove</button>
					</div>
				))}
			</ul>
			}

			<label>
				<h2 className="createNewGameH2" >Total time:</h2>
				<input type="text" value={time} placeholder="〇〇:〇〇" onChange={handleChangeTime}/>
			</label>

			<label>
				<h2 className="createNewGameH2" >Comment:</h2>
				<textarea className="inputComment" value={comment} onChange={handleChangeComment}　required />
			</label>
			<div className="addButton">
			<DefaultButton ButtonName="ADD GAME" onClick={handleSubmit} />
			</div>
			
			
			
		</form>
		</div>
		
		</>
	)
};

export default CreateNewGame;