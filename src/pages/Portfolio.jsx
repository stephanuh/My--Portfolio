import { useEffect } from "react";

import weatherDashboard from "../assets/img/weather-dashboard.PNG";
import vehicleBuilder from "../assets/img/vehicle builder.PNG";
import foodLuvs from "../assets/img/foodLuvs.PNG";
import employeeTracker from "../assets/img/employee-tracker.PNG";
import readmeGenerator from "../assets/img/Readme-Generator.PNG";
import cssVariables from "../assets/img/css-variable.PNG";

import '../assets/styles/Portfolio.css';

function Portfolio() {
    useEffect(() => {
            document.title = "Portfolio";
        }, []);

    const myProjects = [
        {
            projectname: "Weather Dashboard",
            img: weatherDashboard,
            srcrepo: "https://github.com/stephanuh/Weather-Dashboard-Challenge",
            sitelocation: "https://weather-dashboard-challenge-52kv.onrender.com/",
            skills: "HTML, CSS, JavaScript, OpenWeather API",
        },
        {
            projectname: "Vehicle Builder",
            img: vehicleBuilder,
            srcrepo: "https://github.com/stephanuh/Vehicle-Builder-Challenge",
            sitelocation: "https://drive.google.com/file/d/1WxE5JHsm8Sem477YuTOhLyF8FutZaF5F/view",
            skills: "TypeScript, OOP",
        },
        {
            projectname: "Food Luvs",
            img: foodLuvs,
            srcrepo: "https://github.com/MotoDTop/FoodLuvsMeal",
            sitelocation: "",
            skills: "HTML, CSS, JavaScript",
        },
        {
            projectname: "Employee Tracker",
            img: employeeTracker,
            srcrepo: "https://github.com/stephanuh/Employee-Tracker",
            sitelocation: "https://drive.google.com/file/d/1sWu6ogGAUJ68fc4tsRt-HOFsZu3C0QGD/view",
            skills: "PostGreSQL",
        },
        {
            projectname: "Readme Generator",
            img: readmeGenerator,
            srcrepo: "https://github.com/stephanuh/Develop-challenge",
            sitelocation: "https://drive.google.com/file/d/1K_fhIYbZGSt39xaaY6wAIURIwOl1g8V6/view",
            skills: "Node.js",
        },
        {
            projectname: "CSS Variables",
            img: cssVariables,
            srcrepo: "https://github.com/stephanuh/css-variables-mini-project",
            sitelocation: "",
            skills: "HTML, CSS",
        },
    ];

    return (
        <>
         <h2 className="page-title">Portfolio</h2>
            <div className="portfolio-grid">
                {myProjects.map((project, index) => (
                    <div className="portfolio-card" key={index}>
                        <img src={project.img} alt={project.projectname} className="project-image" />
                        <div className="portfolio-content">
                            <h3>
                                <a href={project.sitelocation} target="_blank" rel="noopener noreferrer" className="project-link">
                                    {project.projectname}
                                </a>
                                <a href={project.srcrepo} target="_blank" rel="noopener noreferrer" className="github-icon">
                                <i className="bi bi-github"> Github</i>
                                </a>
                            </h3>
                            <p className="portfolio-skills">{project.skills}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Portfolio;
