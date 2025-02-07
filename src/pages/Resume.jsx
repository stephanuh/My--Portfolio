import '../assets/styles/Resume.css';
import { useEffect } from 'react';

export default function Resume() {
    useEffect(() => {
            document.title = "Resume";
        }, []);

    return (
        <div className="resume-container">
        <div className="resume-page">
            <h2 className="page-title">Resume</h2>
            <div className="resume-download">
                <a href="/assets/files/Resume.pdf" download className="download-btn">
                    Download Resume
                </a>
            </div>
            <section className="resume-section">
                <h3 style={{ color: "#2C3E50" }}>Technical Skills</h3>
                <ul className="skills-list">
                    <li>HTML, CSS, JavaScript</li>
                    <li>React.js, Node.js</li>
                    <li>SQL, PostgreSQL</li>
                    <li>REST APIs, Express.js</li>
                    <li>Git, GitHub</li>
                </ul>
            </section>
            <section className="resume-section">
                <h3 style={{ color: "#2C3E50" }}> Experience</h3>
                <div className="resume-item">
                     <h4>Freelance Web Developer</h4> 
                    <p><em>  [2024 - Present]</em></p> 
                    <ul style={{ color: "#2C3E50" }}>
                         <p>Passionate and detail-oriented full-stack web developer with experience in HTML, CSS, JavaScript, React, Node.js, Express, and SQL. 
                        Strong problem-solving skills and a quick learner, always seeking new opportunities to grow.</p> 
                    </ul>
                </div>
            </section>
            <section className="resume-section">
                <h3 style={{ color: "#2C3E50" }}>Education</h3>
                <div className="resume-item">
                    {/* <h4>Add my Degree Name here</h4> */}
                    {/* <p> Name of University, Year of Graduation</p> */}
                </div>
            </section>
        </div>
        </div>
    );
}
