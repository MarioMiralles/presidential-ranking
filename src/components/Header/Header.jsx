import logo from '../../assets/logos/plf-logo-full.png';
import './Header.scss';

function Header() {
    return (
        <header className='header'>
            <img className="header__logo" src={logo} alt="pacific legal foundation logo" />
        </header>
    );
}

export default Header;