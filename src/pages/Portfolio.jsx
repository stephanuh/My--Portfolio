//import weatherDashboard from '/public/images/Weather-Dashboard.PNG';
//import vehicleBuilder from '/public/images/vehicle builder.PNG';
//import foodLuvs from '/public/images/foodLuvs.PNG';
//import employeeTracker from '/public/images/employee-tracker.PNG';
//import readmeGenerator from '/public/images/Readme-Generator.PNG';
//import cssVariables from '/public/images/css-variable.PNG'; 

function Portfolio() {
    const myProjects = [
       {
         projectname: 'Weather Dashboard',
        //img: weatherDashboard,
        srcrepo: "https://github.com/stephanuh/Weather-Dashboard-Challenge",
        sitelocation: "https://weather-dashboard-challenge-52kv.onrender.com/",
        skills: "HTML, CSS, JavaScript, OpenWeather API",
        //description: "This weather dashboard allows users to search for a city and see the current weather as well as the 5-day forecast. The dashboard also saves the search history so users can easily access the weather for cities they have previously searched for."
        },
        {
        projectname: 'Vehicle Builder',
        //img: vehicleBuilder,
        srcrepo: "https://github.com/stephanuh/Vehicle-Builder-Challenge",
        sitelocation: "https://drive.google.com/file/d/1WxE5JHsm8Sem477YuTOhLyF8FutZaF5F/view",
        skills: "TypeScript, OOP"
        //description: "This vehicle builder allows users to build their own vehicle by selecting the type of vehicle, the color, and the number of wheels. The vehicle is then displayed on the screen."
        },
        {
        projectname: 'Food Luvs',
        //img: foodLuvs,
        srcrepo: "https://github.com/MotoDTop/FoodLuvsMeal",
        sitelocation: "",
        skills: "HTML, CSS, JavaScript",
        //description: "This website allows users to choose a recipes each day and is presented with ingredients."
        },
        {
        projectname: 'Employee Tracker',
        //img: employeeTracker,
        srcrepo: "https://github.com/stephanuh/Employee-Tracker",
        sitelocation: "https://drive.google.com/file/d/1sWu6ogGAUJ68fc4tsRt-HOFsZu3C0QGD/view",
        skills: "PostGreSQL"
        //description: "This employee tracker allows users to add, view employees from a database."
        },
        {
        projectname: 'Readme Generator',
        //img: readmeGenerator,
        srcrepo: "https://github.com/stephanuh/Develop-challenge",
        sitelocation: "https://drive.google.com/file/d/1K_fhIYbZGSt39xaaY6wAIURIwOl1g8V6/view",
        skills: "Node.js"
        // description: "This readme generator allows users to create a readme file by answering a series of questions in the terminal."
        },
        {
        projectname: 'CSS Variables',
        //img: cssVariables,
        srcrepo: "https://github.com/stephanuh/css-variables-mini-project",
        sitelocation: "",
        skills: "HTML, CSS",
        //description: "This project allows users to change the color, spacing, and blur of an image using CSS variables."
        },
    ];
    return(
        <>
        <h2 className="page-title mt-3">Portfolio</h2>
        <div className="container mt-3">
            <div className="row g-4">
                {myProjects.map((project, index) => (
                    <div className="col-12 col-sm-6 col-md-4" key={index}>
                        <div className="tile"> 
                            <img src={project.img} alt={project.projectname} className="img-fuild"
                            />
                            <div className="overlay">
                                <div className="content">
                                    <h3>
                                        <a href={project.sitelocation} target="_blank" rel="noopener noreferrer " className="portfolio-link">
                                            {project.projectname}
                                        </a>
                                        <a href={project.srcrepo} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                                            <i className="bi bi-github"></i>
                                        </a>
                                    </h3>
                                    <div className="portfolio-skills">{project.skills}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Portfolio;