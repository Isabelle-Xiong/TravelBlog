import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header>
            {/* to / goes back to index page */}
            <Link to="/" className="logo">Isabelle's Blog</Link>
            <nav>
                {/* routes to the login page in App.js */}
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
}