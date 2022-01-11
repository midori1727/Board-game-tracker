import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './History.css';
import Header from '../Header/Header';

const History = () => {

	const selector = useSelector( (state) => state);
	const gameLists = selector.gameList.gameLists;
	const history = useHistory()
	
	const handleClick = (id) => {
		history.push('/history/'+id)
	}

	return (
		<>
		<header>
			<Header />
		</header>
		<h1 className="title">History</h1>
		
		<div className="gameListsWrapper">
			<div className="gameLists">
				{gameLists.map((gameList) => (
					<div key={gameList.id} className="gameListCard" onClick={()=>handleClick(gameList.id)}>
						<h1>{gameList.title}</h1>
						<p >{gameList.scenario}</p>
						<p>Created: {gameList.createdDate}</p>
					</div>
				))}
			</div>
		</div>
		</>
	)
};

export default History;
