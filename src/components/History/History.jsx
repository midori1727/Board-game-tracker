import './History.css';
import Header from '../Header/Header';
// import { useEffect, useState } from 'react';
// import Store from '../../redux/store/index';
import {connect, useDispatch, useSelector} from 'react-redux';
import {gameListAddAction,gameListRemoveAction} from '../../redux/actions'


const History = (
	props
	// {gameList}
	) => {
	
	// console.log('props:' ,props.gameData)

	// const [gameDataList, setGameDataList] =useState([]);

	// useEffect(() => {
	// 	console.log('hej')
	// 	setGameDataList(props.gameData)
		
	// },[])

	// console.log(gameDataList);

	const {gameListAddAction,gameListRemoveAction} = props;
	const dispatch = useDispatch();
	const selector = useSelector( (state) => state);

	console.log(selector)

	return (
		<>
		<header>
			<Header />
		</header>
		<h1>History</h1>
		{/* <p>{gameList}</p> */}
		{/* <p>{Store.getState().gameDataLists}</p> */}
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

// const mapStateToProps = (state) => {
// 	return  {
// 		gameList: state.gameList
// 	}
// }

// export default connect(mapStateToProps, {gameListAddAction,gameListRemoveAction})(History);
export default History;