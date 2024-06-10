import {useState} from "react";
import hotelData from "../hotelData";
import HotelCard from "./HotelCard";
import {useNavigate} from "react-router-dom";

function Browse() {

    const navigate = useNavigate();

    const [hotels, setHotels] = useState(hotelData);

    const [query, setQuery] = useState("");


    const routeChange = (hotel) => {
        let path = `/hotel-page`;
        navigate(path, {
            state: {
                id: hotel.id,
                name: hotel.name,
                description: hotel.description,
                city: hotel.city,
                stars: hotel.stars,
                price: hotel.price
            }
        });
    }

    const handleSearch = (e) => {
        setQuery(e.target.value);
    }

    const hotelsHTML = hotels
        .filter(it => it.name.toLowerCase().includes(query))
        .map(it => <HotelCard name={it.name} description={it.description} city={it.city} stars={it.stars}
                              price={it.price}/>)

    return (
        <div>
            <section id="browse" className="browse-section">
                <p className="title-middle">Explore the hotels</p>
                <input className="searchbar" value={query} onChange={handleSearch} placeholder="Search by hotel name, place etc." />
                <section className="grid hotel-cards">
                    {hotelsHTML}
                </section>
                <button className="button secondary" >
                    Find more <img src="/Assets/Arrow.svg" alt={""}/>
                </button>
            </section>
        </div>


    );
}

export default Browse;