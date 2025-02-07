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
                <h3 style={{ color: "#2C3E50" }}>Work Experience</h3>
                <div className="resume-item">
                    {/* <h4>Name of position - Company Name</h4> */}
                    {/* <p><em> Add how long Ive worked there</em></p> */}
                    <ul style={{ color: "#2C3E50" }}>
                        {/* <li>Description about the job</li> */}
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
