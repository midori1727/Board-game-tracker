import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './FrontPage.css';


const FrontPage = () => {
	return (
		<>
		<h1>Board Game Tracker</h1>
		<div className="FrontPageButton">
			<Link to="/create"><Button ButtonName="Create new game"/></Link>
			<Link to="/history"><Button ButtonName="History"/></Link>
		</div>
		</>
	)
}


export default FrontPage;