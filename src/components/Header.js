import Navbar from './Burger-menu';

const Header = () => {
    return <header className="header">
                <Navbar/>  
                <img
                    src = "./img/logo.svg"
                    alt="logo"
                    className="header__logo"
                />
           </header>
};



export default Header;