import { useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import Header from '../Header/Header';
import {gameListRemoveAction} from '../../redux/actions/index';
import './SingleHistory.css';
import DefaultButton from '../Button/DefaultButton';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

const SingleHistory = () => {

	const selector = useSelector( (state) => state);
	const gameLists = selector.gameList.gameLists;
	const params = useParams();
	const dispatch = useDispatch();
	const history = useHistory()

	const [id, setId] = useState('');
	const [color, setColor] = useState([]);
	const [isShowModal, setIsShowModal] = useState(false);
	const [isRemoved, setIsRemoved] = useState(false);
	let colorArray = [];

	const selectedHistory = gameLists.filter(gameList => {
		return gameList.id === params.id;
	})

	useEffect (() => {
		selectedHistory.map(gameList => {
			setId(gameList.id)
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
		setIsShowModal(false)
		setIsRemoved(true);
	}

	const handleEdit = (id) => {
		history.push('/edit/'+id);
	}

	const handleConfirm = () => {
		setIsShowModal(false)
		setIsRemoved(false)
		history.push('/history');
	}

	const handleClose = () => {
		setIsRemoved(false);
		history.push('/history');
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
						<p className="gameCreatedDate">Created Date: {gameList.createdDate}</p>
						<DefaultButton ButtonName="REMOVE" onClick={() => setIsShowModal(true)} />
						<DefaultButton ButtonName="EDIT" onClick={()=> handleEdit(gameList.id)} />
					</div>
				))}

				< Modal isOpen={isShowModal}　
						onRequestClose={() => setIsShowModal(false)}
						overlayClassName={{
							base: "overlay-base",
							afterOpen: "overlay-after",
							beforeClose: "overlay-before"
						  }}
						  className={{
							base: "content-base",
							afterOpen: "content-after",
							beforeClose: "content-before"
						  }}
						  closeTimeoutMS={500}>
					<p >Do you really want to remove this game?</p>
					<DefaultButton ButtonName="REMOVE" onClick={()=> handleRemove(id)} />
					<DefaultButton ButtonName="CANCEL" onClick={() => setIsShowModal(false)} />
				</Modal>

				< Modal isOpen={isRemoved}　
						// onRequestClose={() => setIsRemoved(false)}
						onRequestClose={handleClose}
						overlayClassName={{
							base: "overlay-base",
							afterOpen: "overlay-after",
							beforeClose: "overlay-before"
						  }}
						  className={{
							base: "content-base",
							afterOpen: "content-after",
							beforeClose: "content-before"
						  }}
						  closeTimeoutMS={500}>
					<p >Removed</p>
					<DefaultButton ButtonName="BACK TO HISTORY" onClick={handleConfirm} />
				</Modal>
		</div>
		</>
	)
}

export default SingleHistory;