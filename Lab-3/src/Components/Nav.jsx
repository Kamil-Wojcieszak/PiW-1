const logo = "/Assets/logo.svg"
function Nav() {
	return (


		<nav className="fixed-navigation">
			<a href="#"> <img src={logo}/> </a>
			<ul className="nav-links">
				<li><a className="nav-link" href="#">Home</a></li>
				<li onClick={()=>{document.getElementById('browse')?.scrollIntoView()}}><a className="nav-link" href="#browse">Browse</a></li>
				<li><a className="nav-link" href="index.html#rent">Rent with us</a></li>
				<li><a className="nav-link" href="favourites.html">Favourites</a></li>
				<li><a className="nav-link" href="index.html#">Sign up</a></li>
				<button className="button primary">Log in</button>
			</ul>
			<button className="button primary hidden">Menu</button>
		</nav>

	);
}

export default Nav;
