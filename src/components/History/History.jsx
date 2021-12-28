import './History.css';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';

const History = (props) => {
	
	console.log('props:' ,props.gameData)

	const [gameDataList, setGameDataList] =useState([]);

	useEffect(() => {
		console.log('hej')
		setGameDataList(props.gameData)
		
	},[])

	console.log(gameDataList);

	return (
		<>
		<header>
			<Header />
		</header>
		<h1>History</h1>
		{/* <ul>
				{props.gameData.map((game, index) => (
					<div key={index}>
					<h2>{game.title}</h2>
					<p>{game.scenario}</p>
					<p>{game.memberAndPoints.map((m,index) => (
						<div key={index}>
							<p>{m.name}</p>
							<p>{m.points}</p>
						</div>
					))}</p>
					<p>{game.time}</p>
					<p>{game.comment}</p>
					</div>
				))}
			</ul> */}
		</>
	)
};

export default History;