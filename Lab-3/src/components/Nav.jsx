import {Link, useNavigate} from "react-router-dom";

const logo = "/Assets/logo.svg"

function Nav() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/login`;
        navigate(path);
    }

    return (
        <nav className="fixed-navigation">
            <Link className="nav-link" to="/"> <img src={logo}/> </Link>
            <ul className="nav-links">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/#browse">Browse</Link></li>
                <li><Link className="nav-link" to="/#rent">Rent with us</Link></li>
                <li><Link className="nav-link" to="/#favourites">Favourites</Link></li>
                {/*<li><Link className="nav-link" to="login">Sign up</Link></li>*/}
                <button className="button primary" onClick={routeChange}>Sign In</button>
            </ul>
            <button className="button primary hidden">Menu</button>
        </nav>
    );
}

export default Nav;
