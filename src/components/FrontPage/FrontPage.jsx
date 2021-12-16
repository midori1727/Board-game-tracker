import { Link } from 'react-router-dom';
import DefaultButton from '../Button/DefaultButton';
import './FrontPage.css';


const FrontPage = () => {
	return (
		<>
		<h1>Board Game Tracker</h1>
		<div className="FrontPageButton">
			<Link to="/create"><DefaultButton ButtonName="Create new game"/></Link>
			<Link to="/history"><DefaultButton ButtonName="History"/></Link>
		</div>
		</>
	)
}


export default FrontPage;