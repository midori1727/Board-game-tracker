import './History.css';
import Header from '../Header/Header';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';



const History = () => {

	const selector = useSelector( (state) => state);
	const gameLists = selector.gameList.gameLists;
	const history = useHistory()
	
	const handleClick = (id) => {
		console.log(id)
		history.push('/history/'+id)
	}

	console.log(gameLists)

	return (
		<>
		<header>
			<Header />
		</header>
		<h1>History</h1>
		
		<div className="gameLists">
			{gameLists.map((gameList) => (
				<div key={gameList.id} className="gameListCard" onClick={()=>handleClick(gameList.id)}>
					<h1>{gameList.title}</h1>
					<p>{gameList.scenario}</p>
					<p>{gameList.time}</p>
					<p>{gameList.comment}</p>
				</div>
			))}
      	</div>
		</>
	)
};


// export default connect(mapStateToProps, {gameListAddAction,gameListRemoveAction})(History);
export default History;
// export default connect(mapStateToProps)(History);