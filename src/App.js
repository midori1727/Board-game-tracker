import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage';
import CreateNewGame from './components/Create/CreateNewGame';
import EditGame from './components/EditGame/EditGame';
import History from './components/History/History';
import SingleHistory from './components/History/SingleHistory';

function App() {
	
	return (
		<HashRouter basename="/">
			<div className="App">
				<Switch>
					<Route path="/create" component={CreateNewGame} />
					<Route path="/edit/:id" component={EditGame} />
					<Route path="/history/:id" component={SingleHistory} />
					<Route path="/history" component={History} />
					<Route exact path="/" component={FrontPage} />
				</Switch>
			</div>
		</HashRouter>
    );
}

export default App;