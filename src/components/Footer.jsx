//import  
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer(){
    return(
        <footer className="footer">
            <div className= "footer-container">
                 
                    <a
                    href="https://github.com/stephanuh"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <i className="bi bi-github"></i>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/stephanie-sosa-0b248434b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <i className="icon bi bi-linkedin"></i>
                    </a>
                    <a
                    href="https://stackoverflow.com/users/27560732/stephanie-s"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <i className="icon bi bi-stack-overflow"></i>
                    </a>
                
            </div>
        </footer>
    );
};
export default Footer;