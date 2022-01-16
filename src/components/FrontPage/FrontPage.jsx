import { Link } from 'react-router-dom';
import DefaultButton from '../Button/DefaultButton';
import './FrontPage.css';
import Image from '../../frontPageImg.svg';


const FrontPage = () => {
	return (
		<>
		<h1 className="title frontTitle">Board Game Tracker</h1>
		<div className="FrontPageButton">
			<div className="frontPageImg">
				<img src={Image}  alt='frontPageImage' />
			</div>
			<Link to="/create"><DefaultButton ButtonName="Create new game"/></Link>
			<Link to="/history"><DefaultButton ButtonName="History"/></Link>
		</div>
		</>
	)
}

export default FrontPage;