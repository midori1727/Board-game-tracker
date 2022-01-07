import { useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Header from '../Header/Header';

const SingleHistory = () => {

	const selector = useSelector( (state) => state);
	const gameLists = selector.gameList;
	const params = useParams();

	const selectedHistory = gameLists.filter(gameList => {
		return gameList.id === params.id;
	})

	return (
		<>
		<header>
			<Header />
		</header>
		{selectedHistory.map((gameList) => (
				<div key={gameList.id} >
					<h1>{gameList.title}</h1>
					<p>id: {gameList.id}</p>
					<p>{gameList.scenario}</p>
					<p>{gameList.time}</p>
					<p>{gameList.comment}</p>
				</div>
			))}
		</>
	)
}

export default SingleHistory;