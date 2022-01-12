import { useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import Header from '../Header/Header';
import {gameListRemoveAction} from '../../redux/actions/index';
import './SingleHistory.css';
import DefaultButton from '../Button/DefaultButton';
import { useEffect, useState } from 'react';

const SingleHistory = () => {

	const selector = useSelector( (state) => state);
	const gameLists = selector.gameList.gameLists;
	const params = useParams();
	const dispatch = useDispatch();
	const history = useHistory()

	const [color, setColor] = useState([]);

	const selectedHistory = gameLists.filter(gameList => {
		return gameList.id === params.id;
	})

	let colorArray = [];
	useEffect (() => {
		selectedHistory.map(gameList => {
			gameList.memberAndPoints.map((memberAndPoint)=> {
				colorArray = [...colorArray, memberAndPoint.color];
				setColor(colorArray);
			})
		})
	},[])


	const handleRemove = (id) => {
		dispatch(gameListRemoveAction( {
			id: id,
		}));
		history.push('/')
	}

	const handleEdit = (id) => {
		history.push('/edit/'+id)
	}

	return (
		<>
		<header>
			<Header />
		</header>
		<h1 className="title">History</h1>
		<div className="gameDetailsWrapper">
			{selectedHistory.map((gameList) => (
					<div className="gameDetails" key={gameList.id} >
						<h1 >{gameList.title}</h1>
						<p className="gameDetailsScenario">Scenario: {gameList.scenario}</p>
						{color && 
						<>
						{gameList.memberAndPoints.map((memberAndPoint,index) => (
							<div className="gameMemberAndPoints" key={index} >
								<p style={{ color: color[index]}}>{memberAndPoint.name}</p>
								<p style={{ color: color[index]}}>{memberAndPoint.points} Points</p>
							</div>	
						))}
						</>
							}
						<p className="gameTotalTime">Total Time: {gameList.time}</p>
						<p className="gameComment">Comment: {gameList.comment}</p>
						<DefaultButton ButtonName="REMOVE" onClick={()=> handleRemove(gameList.id)} />
						<DefaultButton ButtonName="EDIT"onClick={()=> handleEdit(gameList.id)} />
					</div>
				))}
		</div>
		</>
	)
}

export default SingleHistory;