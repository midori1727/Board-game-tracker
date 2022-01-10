import { useState, useEffect } from 'react';
import './EditGame.css';
import Header from '../Header/Header';
import { useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import DefaultButton from '../Button/DefaultButton';

const EditGame = () => {

	const selector = useSelector( (state) => state);
	const gameLists = selector.gameList.gameLists;
	const params = useParams();
	const selectedHistory = gameLists.filter(gameList => {
		return gameList.id === params.id;
	})

	const [title, setTitle] = useState('');
	const [scenario, setScenario] = useState('');
	const [points, setPoints] = useState([]);
	const [time, setTime] = useState('');
	const [comment, setComment] = useState('');
	let newPointsList = [];

	useEffect (() => {
		selectedHistory.map(game => {
			setTitle(game.title);
			setScenario(game.scenario);
			setTime(game.time);
			setComment(game.comment)
			game.memberAndPoints.map((memberAndPoint) => {
				newPointsList = [...newPointsList, memberAndPoint.points]
				setPoints(newPointsList);
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
		let pointsArray = [...points];
		let changeIndex =  pointsArray[index];
		changeIndex = e.target.value;
		pointsArray[index] = changeIndex ;
		setPoints( pointsArray);
	};

	console.log(points);

	const handleChangeTime = (e) => {
		setTime(e.target.value);
	}

	const handleChangeComment = (e) => {
		setComment(e.target.value);
	}

	const handleSubmit = () => {
		
	}

	// dispatchの際にインプットが空欄の場合は元々の値にするというif文を入れる事

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
								
								<input value={points[index]}  onChange={(e) => handleChangePoints(e,index)} /> points		
								{/* <input value={memberAndPoint.points}  onChange={(e) => handleChangePoints(e,index)} /> */}
						</div>	
					))}
					{/* {pointsList.map((point, index) => (
						<input key={index} value={point} onChange={(e) => handleChangePoints(e,index)}/>
					))} */}

					<label>
						<h2 className="editGameH2">Total Time:</h2>
						<input value={time} onChange={handleChangeTime}/>
					</label>
					<label>
						<h2 className="editGameH2">Comment:</h2>
						<input value={comment} onChange={handleChangeComment}/>
					</label>	
				</div>
			))}

			<DefaultButton ButtonName="SAVE" onClick={handleSubmit} />
		</div>
		
	
		</>
	)
}

export default EditGame;