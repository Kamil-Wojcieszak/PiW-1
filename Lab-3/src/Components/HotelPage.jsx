import { useState } from "react";

const HotelCard = ({name,description,city,stars,price}) => {


	return (
		<article className="hotel-card">
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