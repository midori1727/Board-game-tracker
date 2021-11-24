import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage'
import CreateNewGame from './components/Create/CreateNewGame';

function App() {
  return (
	<Router>
		<div className="App">
		<main className="App-main">
			<Switch>
				{/* <Route exact path="/"><FrontPage /></Route> */}
				
				<Route path="/create" component={CreateNewGame} />
				<Route exact path="/" component={FrontPage} />
				{/* <Route path="/create"><CreateNewGame /></Route> */}
			</Switch>
		</main>
		</div>
	</Router>
  );
}

export default App;
