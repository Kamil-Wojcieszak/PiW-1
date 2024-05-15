import {useState} from "react";
import hotelData from "../hotelData";
import HotelCard from "./HotelCard";

function Browse() {

	const [hotels, setHotels] = useState(hotelData);

	const routeChange = (hotel) => {
		let path = `/hotel-page`;
		navigate(path, {
			state: {
				id: hotel.id,
				name: hotel.name,
				description: hotel.description,
				city:hotel.city,
				stars:hotel.stars,
				price:hotel.price
			}
		});
	}

	const hotelsHTML = hotels
		.map(it => <HotelCard name={it.name} description={it.description} city={it.city} stars={it.stars}
							  price={it.price}/>)

	return (
		<div>
			<section id="browse" className="browse-section">
				<p className="title-middle">Explore the hotels</p>
				<input className="searchbar" placeholder="Search by hotel name, place etc."/>
				<section className="grid hotel-cards">
					{hotelsHTML}
				</section>
				<button className="button secondary" onClick={routeChange()}>
					Find more <img src="/Assets/Arrow.svg" alt={""}/>
				</button>
			</section>
		</div>


	);
}

export default Browse;