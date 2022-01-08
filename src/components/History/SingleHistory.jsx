import { useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import Header from '../Header/Header';
import {gameListRemoveAction} from '../../redux/actions/index'

const SingleHistory = () => {

	const selector = useSelector( (state) => state);
	const gameLists = selector.gameList.gameLists;
	const params = useParams();
	const dispatch = useDispatch();
	const history = useHistory()

	const selectedHistory = gameLists.filter(gameList => {
		return gameList.id === params.id;
	})


	const handleRemove =(id) => {
		dispatch(gameListRemoveAction( {
			id: id,
		}));
		history.push('/')
	}
	console.log(gameLists)

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
					<button onClick={()=> handleRemove(gameList.id)}>Remove</button>
				</div>
			))}
		</>
	)
}

export default SingleHistory;