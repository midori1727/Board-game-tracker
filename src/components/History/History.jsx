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
	const gameLists = selector.gameList;

	console.log(gameLists)

	return (
		<>
		<header>
			<Header />
		</header>
		<h1>History</h1>
		<div className="gameLists">
			{gameLists.map((gameList, index) => (
				<div key={index} className="gameListCard">
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

// const mapStateToProps = (state) => {
// 	return  {
// 		gameList: state.gameList
// 	}
// }

// export default connect(mapStateToProps, {gameListAddAction,gameListRemoveAction})(History);
export default History;