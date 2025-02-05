import { Link, useLocation } from "react-router-dom";

function Navtab(){
    const currentPage = useLocation().pathname;

    return(
        <nav className="navbar py-4 ">
            <h1 className="mb-0 navbar-name">
                Stephanie Sosa Alonzo
            </h1>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/About" className={currentPage === "/About" || currentPage === "/" ? "nav-link active" : "nav-link"}>
                    <h2>About Me</h2>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Portfolio" className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}>
                    <h2>Portfolio</h2>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact" className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}>
                    <h2>Contact</h2>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Resume" className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}>
                    <h2>Resume</h2>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navtab;
