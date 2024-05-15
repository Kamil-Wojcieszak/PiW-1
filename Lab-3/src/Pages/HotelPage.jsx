import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";

const styles = {
	"text-align": "justify"
}

function HotelPage({name,description,city,stars,price}) {
	return (

		<section id="hotel-page" className="hotel-section">
			<p className="title-large">Serene Retreat</p>

			<div className="hotel-details">
				<div className="left"><img src="/Assets/cards2.jpg"/></div>
				<div className="right">
					<p><b>Location: </b>Madrid</p>

					<p><b>Local category: </b>★★★★☆</p>

					<p><b>Price: </b>70€/room/night</p>

					<p><b>Description: </b></p>

					<p style={styles}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec leo
						ligula. Etiam fermentum est in euismod egestas. Curabitur at
						condimentum ligula. Phasellus nunc velit, facilisis fermentum congue
						ac, cursus at leo. Interdum et malesuada fames ac ante ipsum primis
						in faucibus. Nullam nec sapien vitae neque scelerisque tempus.
						Vestibulum hendrerit tellus ut pulvinar feugiat. Nullam iaculis
						vitae justo sit amet tempus. Nam nunc nunc, porttitor sed turpis
						quis, feugiat egestas leo. Phasellus consequat magna ante, ac
						aliquam felis convallis sit amet. Sed massa lorem, iaculis ac
						vestibulum ac, tempus a tortor. Ut posuere ipsum nec condimentum
						vehicula. Curabitur orci velit, aliquam vel arcu quis, semper congue
						ligula.
					</p>
					<button className="green-button">
						<a href="popup.html">Edit <i className="glyphicon glyphicon-pencil"></i></a>
					</button>
					<button className="green-button">
						Remove <i className="glyphicon glyphicon-trash"></i>
					</button>

					<div className="hotel-image-container">
						<div className="hotel-image">
							<img src="/Assets/cards1.jpg" alt=""/>
						</div>
						<div className="hotel-image">
							<img src="/Assets/cards2.jpg" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HotelPage;
