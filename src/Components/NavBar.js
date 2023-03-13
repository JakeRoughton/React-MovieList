import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Movies">Movie Listings</Link>
            <Link to="/MovieSearch">Movie Search</Link>
        </div>
    )
}
export default NavBar