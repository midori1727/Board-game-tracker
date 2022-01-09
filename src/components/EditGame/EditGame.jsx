import { useState } from 'react';
import './EditGame.css';
import Header from '../Header/Header';
import { useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

const EditGame = () => {


	const selector = useSelector( (state) => state);
	const gameLists = selector.gameList.gameLists;
	const params = useParams();

	const selectedHistory = gameLists.filter(gameList => {
		return gameList.id === params.id;
	})

	const [title, setTitle] = useState('');
	const [scenario, setScenario] = useState('');
	const [members, setMembers] = useState([]);

	return (
		<>
		<header>
			<Header />
		</header>
		<h1>Edit Game</h1>
		{selectedHistory.map((gameList) => (
					<div key={gameList.id} >
						<label>
							<h2>Title:</h2>
							<input value={gameList.title} />
						</label>
						<input value={gameList.scenario} />
						{gameList.memberAndPoints.map((memberAndPoint,index) => (
							<div  key={index} >
								<input value={memberAndPoint.name}/>
								<input value={memberAndPoint.points} /> Points
							</div>	
						))}
						<input value={gameList.time} />
						<input value={gameList.comment}/>
						
						
					</div>
				))}
		
	
		</>
	)
}

export default EditGame;