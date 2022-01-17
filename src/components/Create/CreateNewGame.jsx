import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {gameListAddAction} from '../../redux/actions/index';
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
	const color = useState('white');
	const [memberAndPoints, setMemberAndPoints] = useState([]);
	const [time, setTime] = useState('');
	const [comment, setComment] = useState('');
	const [createdDate, setCreatedDate] = useState('');

	// validation
	const [ titleIsValid, setTitleIsValid ] = useState(true);
	const [ titleErrorMessage, setTitleErrorMessage ] = useState('');
	const [ memberAndPointsIsValid, setMemberAndPointsIsValid ] = useState(true);
	const [ memberAndPointsErrorMessage, setMemberAndPointsErrorMessage ] = useState(true);
	const [ timeIsValid, setTimeIsValid ] = useState(true);
	const [ timeErrorMessage, setTimeErrorMessage ] = useState('');
	const [ pointsIsValid, setPointsIsValid ] = useState(true);
	const [ pointsErrorMessage, setPointsErrorMessage ] = useState('');

	useEffect (() => {
		const now = new Date();
		const year = now.getFullYear();
		let month = ("0"+(now.getMonth() + 1)).slice(-2);
		let day =  ("0"+now.getDate()).slice(-2);
		const createdDate = `${year}-${month}-${day}`;
		setCreatedDate(createdDate);
	},[]);

	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
		setTitleIsValid(true);
	};

	const handleChangeScenario = (e) => {
		setScenario(e.target.value);
	};

	const handleChangeMember = (e) => {
		setMember(e.target.value);
	};

	const handleChangePoints = (e) => {
		setPoints(e.target.value);
		setPointsIsValid(true);
	};

	const handleChangeTime = (e) => {
		setTime(e.target.value);
		setTimeIsValid(true);
	};

	const handleChangeComment  = (e) => {
		setComment(e.target.value);
	};

	const handleCreatedDate = (e) => {
		setCreatedDate(e.target.value);
	}

	const handleChangeMemberColor = (e, index) => {
		let pointsAndMembersArray = [...memberAndPoints];
		let addColor =  pointsAndMembersArray[index].color;
		addColor = e.target.value;
		pointsAndMembersArray[index].color = addColor;
		setMemberAndPoints(pointsAndMembersArray);
	}

	const addMember = (e) => {
		e.preventDefault();
		if(member === '' || points === '') return;
		if(points.match(/[^0-9]+/)){
			setPointsIsValid(false);
			setPointsErrorMessage('Please only use digit');
			return;
		}
		setMemberAndPoints([...memberAndPoints, { 'name': member, 'points': points, 'color': color}]);
		setMember('');
		setPoints('');
		setMemberAndPointsIsValid(true);
	};

	const removeMember = (index) => {
		let newDataList = [...memberAndPoints];
		newDataList.splice(index,1);
		setMemberAndPoints(newDataList);
	};

	const selectedColor = memberAndPoints.map((select) => {
		return select.color;
	})


	const handleSubmit = (e) => {
		e.preventDefault();
	
		if(!title) {
			setTitleIsValid(false);
			setTitleErrorMessage('Please input title');
			return;
		}else if (memberAndPoints.length === 0){
			setMemberAndPointsIsValid(false);
			setMemberAndPointsErrorMessage('Please add at least one player');
			return;
		}else if(!time) {
			setTimeIsValid(false);
			setTimeErrorMessage('Please input total time');
			return;
		} else {
			dispatch(gameListAddAction( {
				id: id,
				title: title,
				scenario: scenario,
				memberAndPoints: memberAndPoints,
				time: time,
				comment: comment,
				createdDate: createdDate
			}));
		}
		history.push('/history');
	};

	return(
		<>
		<header>
			<Header />
		</header>
		<h1 className="title">Create New Game</h1>
		<div className="createNewGameWrapper">
			<form className="createNewGameForm">
				<label>
					<h2 className="createNewGameH2" >Title:</h2>
					<input className="inputTitle" type="text" value={title} onChange={handleChangeTitle}  />
					{!titleIsValid
					&&
					<div className="error-message">
						{titleErrorMessage}
					</div>
					}
				</label>

				<label>
					<h2 className="createNewGameH2" >Scenario:</h2>
					<textarea className="inputScenario" value={scenario} onChange={handleChangeScenario} />
				</label>

				<label>
					<h2 className="createNewGameH2" >Player:</h2>
					<input type="text" value={member} maxLength="30" onChange={handleChangeMember}/>
					{!memberAndPointsIsValid
					&&
					<div className="error-message">
						{memberAndPointsErrorMessage}
					</div>
					}
				</label>

				<label>
					<h2 className="createNewGameH2" >Points:</h2>
					<input type="text" value={points} onChange={handleChangePoints} />
					{!pointsIsValid
					&&
					<div className="error-message">
						{pointsErrorMessage}
					</div>
					}
				</label>

				<button className="addMemberButton" onClick={addMember}>+ Add</button>

				{memberAndPoints &&
				<ul>
					{memberAndPoints.map((item, index) => (
						<div key={index} style={{ color: selectedColor[index]}}>
							{item.name} {item.points} points
							<button className="removeButton" onClick={ () => removeMember(index)}>Remove</button>
							<select name="memberColor" className="selectColor" onChange={(e)=>handleChangeMemberColor(e,index)}>
								<option value="" hidden>Change color</option>
								<option defaultValue="white">White</option>
								<option value="rgb(250, 84, 84)" >Red</option>
								<option value="lightblue">Blue</option>
								<option value="lightgreen">Green</option>
								<option value="yellow">Yellow</option>
								<option value="#FF8574">Orange</option>
								<option value="pink">Pink</option>
								<option value="lightgray">Gray</option>
								<option value="rgb(207, 98, 207)">Purple</option>
							</select>
						</div>
					))}
				</ul>
				}

				<label>
					<h2 className="createNewGameH2" >Total time:</h2>
					<input type="time" value={time} onChange={handleChangeTime}/>
					{!timeIsValid
					&&
					<div className="error-message">
						{timeErrorMessage}
					</div>
					}
				</label>

				<label>
					<h2 className="createNewGameH2" >Comment:</h2>
					<textarea className="inputComment" value={comment} onChange={handleChangeComment}　required />
				</label>

				<label >
				<h2 className="createNewGameH2" >Created date:</h2>
					<input type="date" value={createdDate} name='createdDate' onChange={handleCreatedDate}/>
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