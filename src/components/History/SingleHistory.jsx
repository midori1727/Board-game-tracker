import { useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import Header from '../Header/Header';
import {gameListRemoveAction} from '../../redux/actions/index';
import './SingleHistory.css';
import DefaultButton from '../Button/DefaultButton';

const SingleHistory = () => {

	const selector = useSelector( (state) => state);
	const gameLists = selector.gameList.gameLists;
	const params = useParams();
	const dispatch = useDispatch();
	const history = useHistory()

	const selectedHistory = gameLists.filter(gameList => {
		return gameList.id === params.id;
	})


	const handleRemove = (id) => {
		dispatch(gameListRemoveAction( {
			id: id,
		}));
		history.push('/')
	}
	console.log(gameLists)

	const handleEdit = (id) => {
		history.push('/edit/'+id)
	}

	return (
		<>
		<header>
			<Header />
		</header>
		<h1 className="title">History</h1>
		<div className="gameDetail">
			{selectedHistory.map((gameList) => (
					<div className="game" key={gameList.id} >
						<h1>{gameList.title}</h1>
						<p>{gameList.scenario}</p>
						{gameList.memberAndPoints.map((memberAndPoint,index) => (
							<div className="gameMemberAndPoints" key={index} >
								<p>{memberAndPoint.name}</p>
								<p>{memberAndPoint.points} Points</p>
							</div>	
						))}
						<p className="gameTotalTime">Total Time: {gameList.time}</p>
						<p className="gameComment">Comment: {gameList.comment}</p>
						{/* <button onClick={()=> handleRemove(gameList.id)}>Remove</button> */}
						<DefaultButton ButtonName="REMOVE" onClick={()=> handleRemove(gameList.id)} />
						<DefaultButton ButtonName="EDIT"onClick={()=> handleEdit(gameList.id)} />
					</div>
				))}
		</div>
		</>
	)
}

export default SingleHistory;