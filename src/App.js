import './App.css';
import {connect, useDispatch, useSelector} from 'react-redux';
import {gameListAddAction,gameListRemoveAction} from './redux/actions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage';
import CreateNewGame from './components/Create/CreateNewGame';
import EditGame from './components/EditGame/EditGame';
import History from './components/History/History';

// function App(props) {
// 	const {gameListAddAction,gameListRemoveAction} = props;
function App() {
	// const dispatch = useDispatch();
	// const selector = useSelector( (state) => state);

	// console.log(selector)

	
	return (
		<Router>
			<div className="App">
			<main className="App-main">
				<Switch>
					<Route path="/create" component={CreateNewGame} />
					<Route path="/edit" component={EditGame} />
					<Route path="/history" component={History} />
					<Route exact path="/" component={FrontPage} />
				</Switch>
			</main>
			</div>
		</Router>
    );
}

// const mapStateToProps = (state) => {
// 	return  {
// 		gameList: state.gameList
// 	}
// }

// export default connect(mapStateToProps, {gameListAddAction,gameListRemoveAction})(App);

export default App;