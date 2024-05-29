import { useNavigate } from "react-router-dom";

const HotelCard = ({ name, description, city, stars, price }) => {
	const navigate = useNavigate();

	const routeChange = () => {
		let path = `/hotel-page`;
		navigate(path, {
			state: {
				name: name,
				description: description,
				city: city,
				stars: stars,
				price: price
			}
		});
	}

	return (
		<article className="hotel-card" onClick={routeChange}>
			<div className="card-image">
				<p className="chip">{city}</p>
			</div>
			<p className="text-middle">{name}</p>
			<p className="text-small">
				{description}
			</p>
			<div className="hotel-card-footer">
				<p className="text-middle">{"★".repeat(stars) + "☆".repeat(5 - stars)}</p>
				<p className="text-middle">{price}$/room</p>
			</div>
		</article>
	);
}

export default HotelCard;
