import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import './EditGame.css';
import Header from '../Header/Header';
import DefaultButton from '../Button/DefaultButton';
import { gameListEditAction } from '../../redux/actions';

const EditGame = () => {

	const selector = useSelector( (state) => state);
	const gameLists = selector.gameList.gameLists;
	const params = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const selectedHistory = gameLists.filter(gameList => {
		return gameList.id === params.id;
	});

	const [title, setTitle] = useState('');
	const [scenario, setScenario] = useState('');
	const [color, setColor] = useState([]);
	const [memberAndPoints, setMemberAndPoints] = useState([]);
	const [time, setTime] = useState('');
	const [comment, setComment] = useState('');
	const [createdDate, setCreatedDate] = useState('');
	let newMemberAndPointsList = [];
	let colorArray = [];

	// validation
	const [ titleIsValid, setTitleIsValid ] = useState(true);
	const [ titleErrorMessage, setTitleErrorMessage ] = useState('');
	const [ timeIsValid, setTimeIsValid ] = useState(true);
	const [ timeErrorMessage, setTimeErrorMessage ] = useState('');

	useEffect (() => {
		selectedHistory.forEach(game => {
			setTitle(game.title);
			setScenario(game.scenario);
			setTime(game.time);
			setComment(game.comment)
			setCreatedDate(game.createdDate);
			game.memberAndPoints.forEach((memberAndPoint) => {
				newMemberAndPointsList = [...newMemberAndPointsList, { 'name' : memberAndPoint.name, 'points' :memberAndPoint.points, 'color' : memberAndPoint.color}];
				setMemberAndPoints(newMemberAndPointsList);
				colorArray = [...colorArray, memberAndPoint.color];
				setColor(colorArray);
			})	
		})
	},[])

	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
		setTitleIsValid(true);
	};

	const handleChangeScenario = (e) => {
		setScenario(e.target.value);
	};

	const handleChangePoints = (e,index) => {
		let pointsAndMembersArray = [...memberAndPoints];
		let editIndexPoints =  pointsAndMembersArray[index].points;
		editIndexPoints = e.target.value;
		pointsAndMembersArray[index].points = editIndexPoints;
		if(editIndexPoints.match(/[^0-9]+/)) return
		setMemberAndPoints(pointsAndMembersArray);
	};

	const handleChangeTime = (e) => {
		setTime(e.target.value);
		setTimeIsValid(true);
	};

	const handleChangeComment = (e) => {
		setComment(e.target.value);
	};

	const handleChangeCreated = (e) => {
		setCreatedDate(e.target.value);
	};

	const handleSubmit = (id) => {

		const pointsArray = 
		memberAndPoints.map((memberAndPoint) => {
			return memberAndPoint.points;
		})

		const checkPointsSubmit = pointsArray.includes('');

		if(checkPointsSubmit) {
			return;
		}
		if(!title) {
			setTitleIsValid(false);
			setTitleErrorMessage('Please input title');
			return;
		}
		if(!time) {
			setTimeIsValid(false);
			setTimeErrorMessage('Please input total time');
			return;
		}
		else {

		dispatch(gameListEditAction( {
			id: id,
			title: title,
			scenario: scenario,
			memberAndPoints: memberAndPoints,
			time: time,
			comment: comment,
			createdDate: createdDate
		}));
		history.push('/history');
	}
	}

	return (
		<>
		<header>
			<Header />
		</header>
		<h1 className="title">Edit Game</h1>
		<div className="editGameWrapper">
			<div className="editGameForm">
				{selectedHistory.map((gameList) => (
					<div key={gameList.id} >
						<label>
							<h2 className="editGameH2">Title:</h2>
							<input className="editTitle" value={title} onChange={handleChangeTitle}/>
							{!titleIsValid
							&&
							<div className="error-message">
								{titleErrorMessage}
							</div>
							}
						</label>

						<label>
							<h2 className="editGameH2">Scenario:</h2>
							<textarea className="editScenario" value={scenario} onChange={handleChangeScenario}/>
						</label>

						<h2 className="editGameH2">Members:</h2>
						{color && 
							<ul>
							{gameList.memberAndPoints.map((memberAndPoint,index) => (
								<div key={index} className="EditmemberAndPoints">
									<p className="editName" style={{ color: color[index]}}>{memberAndPoint.name}</p>
									{memberAndPoints.length >= 1 && 
									<>
									<input value={memberAndPoints[index].points}  onChange={(e) => handleChangePoints(e,index)} />
									</>
									}
									{memberAndPoints.length >= 1 && memberAndPoints[index].points === ''
									&&
									<div className="error-message points-error-message">
										Please input points
									</div>
									}
								</div>	
							))}
							</ul>
						}							

						<label>
							<h2 className="editGameH2">Total Time:</h2>
							<input type='time' value={time} onChange={handleChangeTime}/>
							{!timeIsValid
							&&
							<div className="error-message">
								{timeErrorMessage}
							</div>
							}
						</label>

						<label>
							<h2 className="editGameH2">Comment:</h2>
							<textarea className="editComment" value={comment} onChange={handleChangeComment}/>
						</label>

						<label>
							<h2 className="editGameH2">Created Date:</h2>
							<input type='date' value={createdDate} onChange={handleChangeCreated}/>
						</label>

						<div className="editButton">
							<DefaultButton ButtonName="CANCEL" onClick={()=>history.goBack()} />
							<DefaultButton ButtonName="SAVE" onClick={() => handleSubmit(gameList.id)} />
						</div>
					</div>
				))}
			</div>
		</div>
		</>
	)
}

export default EditGame;