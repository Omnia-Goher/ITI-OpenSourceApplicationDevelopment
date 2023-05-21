import { NavLink } from "react-router-dom";
import './artist.css';

let Artist = (props) => {

    let { Artist } = props;
    let imageUrl = `./covers/${Artist.cover}.jpg`;

    return (
        <div>
            <div className="card m-2 p-0 w-75 shadow-lg rounded-5" key={Artist.id}>
                <div>
                    <NavLink to={`/artists/${Artist.id}`}>
                        <img className="rounded-5" src={imageUrl} aria-hidden alt={Artist.cover} width="100%" />
                    </NavLink>
                </div>
                <div className="my-2">
                    <NavLink to={`/artists/${Artist.id}`} style={{ color: "black", textDecoration: "none" }}>
                        <h6 className="text text-center fs-4 fw-bold name">{Artist.name}</h6>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Artist;