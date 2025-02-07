import { Link, useLocation } from "react-router-dom";

function Navtab() {
    const currentPage = useLocation().pathname;

    return (
        <nav className="navbar">
            <h1 className="navbar-name">Stephanie Sosa Alonzo</h1>
            <ul className="nav-links">
                <li>
                    <Link 
                        to="/About" 
                        className={currentPage === "/About" || currentPage === "/" ? "nav-link active" : "nav-link"}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/Portfolio" 
                        className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/Contact" 
                        className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/Resume" 
                        className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navtab;

