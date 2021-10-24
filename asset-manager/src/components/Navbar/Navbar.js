import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/view">View</Link>
                    </li>
                    <li>
                        <Link to="/manage">Manage</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/connect">Connect</Link>
                    </li>
                    <li>
                        <Link to="/account">Account</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;