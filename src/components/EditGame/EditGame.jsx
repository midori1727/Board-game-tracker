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
	const [memberAndPoints, setMemberAndPoints] = useState([]);
	const [time, setTime] = useState('');
	const [comment, setComment] = useState('');
	let newMemberAndPointsList = [];

	useEffect (() => {
		selectedHistory.map(game => {
			setTitle(game.title);
			setScenario(game.scenario);
			setTime(game.time);
			setComment(game.comment)
			game.memberAndPoints.map((memberAndPoint) => {
				newMemberAndPointsList = [...newMemberAndPointsList, { 'name' : memberAndPoint.name, 'points' :memberAndPoint.points}];
				setMemberAndPoints(newMemberAndPointsList);
			})	
		})
	},[])

	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleChangeScenario = (e) => {
		setScenario(e.target.value);
	};

	const handleChangePoints = (e,index) => {
		let pointsAndMembersArray = [...memberAndPoints];
		let editIndexPoints =  pointsAndMembersArray[index].points;
		editIndexPoints = e.target.value;
		pointsAndMembersArray[index].points = editIndexPoints ;
		setMemberAndPoints(pointsAndMembersArray);
	};

	const handleChangeTime = (e) => {
		setTime(e.target.value);
	};

	const handleChangeComment = (e) => {
		setComment(e.target.value);
	};

	const handleSubmit = (id) => {

		memberAndPoints.map((memberAndPoint) => {
			if(memberAndPoint.points === '')
			return 
		})
		if(title === '' || scenario === '' || time === '' || comment === '') return;

		dispatch(gameListEditAction( {
			id: id,
			title: title,
			scenario: scenario,
			memberAndPoints: memberAndPoints,
			time: time,
			comment: comment
		}));
		history.push('/history');
	}

	return (
		<>
		<header>
			<Header />
		</header>
		<h1 className="title">Edit Game</h1>
		<div className="editGameWrapper">
			{selectedHistory.map((gameList) => (
				<div key={gameList.id} >
					<label>
						<h2 className="editGameH2">Title:</h2>
						<input value={title} onChange={handleChangeTitle}/>
					</label>
					<label>
						<h2 className="editGameH2">Scenario:</h2>
						<input value={scenario} onChange={handleChangeScenario}/>
					</label>
					<h2 className="editGameH2">Members:</h2>
					{gameList.memberAndPoints.map((memberAndPoint,index) => (
						<div  key={index} >
							{memberAndPoint.name}
							{memberAndPoints.length >= 1 && 
							<>
							<input value={memberAndPoints[index].points}  onChange={(e) => handleChangePoints(e,index)} />Points
							</>
							}
						</div>	
					))}
					<label>
						<h2 className="editGameH2">Total Time:</h2>
						<input value={time} onChange={handleChangeTime}/>
					</label>
					<label>
						<h2 className="editGameH2">Comment:</h2>
						<input value={comment} onChange={handleChangeComment}/>
					</label>	
					<DefaultButton ButtonName="SAVE" onClick={() => handleSubmit(gameList.id)} />
				</div>
			))}

			
			
		</div>
		</>
	)
}

export default EditGame;