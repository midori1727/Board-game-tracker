import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<header>
		<Link to="/">&lt; Back to home</Link>
		</header>
	)
};

export default Header;