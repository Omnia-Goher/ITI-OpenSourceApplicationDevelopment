import { NavLink } from "react-router-dom";
import './header.css';

let Header = ()=>{
    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fs-4" to={"/"}>
                       <p className="nav-item">Artists</p> 
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header;