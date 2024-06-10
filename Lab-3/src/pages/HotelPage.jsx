import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const styles = {
    "text-align": "justify"
}

function HotelPage() {
    const location = useLocation();
    const {name, description, city, stars, price} = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section id="hotel-page" className="hotel-section">
            <p className="title-large">{name}</p>
            <div className="hotel-details">
                <div className="left"><img src="/Assets/cards2.jpg" alt="Hotel"/></div>
                <div className="right">
                    <p><b>Location: </b>{city}</p>
                    <p><b>Local category: </b>{"★".repeat(stars) + "☆".repeat(5 - stars)}</p>
                    <p><b>Price: </b>{price}€/room/night</p>
                    <p><b>Description: </b></p>
                    <p style={styles}>{description}</p>
                    <button className="green-button">
                        <a href="popup.html">Edit <i className="glyphicon glyphicon-pencil"></i></a>
                    </button>
                    <button className="green-button">
                        Remove <i className="glyphicon glyphicon-trash"></i>
                    </button>
                    <div className="hotel-image-container">
                        <div className="hotel-image">
                            <img src="/Assets/cards1.jpg" alt="Hotel"/>
                        </div>
                        <div className="hotel-image">
                            <img src="/Assets/cards2.jpg" alt="Hotel"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HotelPage;
