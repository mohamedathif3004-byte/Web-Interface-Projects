import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="container">

      {/* Header */}
      <header className="header">
        <div className="profile-icon">MA</div>

        <h1>Mohamed Athif Portfolio</h1>

        <p>AI & DS Student | React Developer | Web Enthusiast</p>
      </header>

      {/* Navigation */}
      <div className="menu">

        <button
          className={activeSection === "about" ? "active" : ""}
          onClick={() => setActiveSection("about")}
        >
          About Me
        </button>

        <button
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => setActiveSection("skills")}
        >
          Skills
        </button>

        <button
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => setActiveSection("projects")}
        >
          Projects
        </button>

        <button
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => setActiveSection("contact")}
        >
          Contact
        </button>

      </div>

      {/* About Section */}
      {activeSection === "about" && (
        <div className="card">

          <h2>About Me</h2>

          <p>
            Hello! I am <b>Mohamed Athif</b>, a Second Year student
            pursuing <b>Artificial Intelligence and Data Science</b>.
          </p>

          <p>
            I am passionate about developing modern web applications
            using React JS and solving real-world problems through
            programming.
          </p>

          <p>
            My areas of interest include Web Development, Artificial
            Intelligence, Data Analytics, Database Management Systems,
            and Software Engineering.
          </p>

          <p>
            I continuously improve my technical skills by building
            projects, participating in coding challenges, and learning
            new technologies.
          </p>

          <div className="info-box">

            <h3>Education</h3>

            <ul>
              <li>B.Tech AI & DS - II Year</li>
              <li>CGPA: 8.7</li>
              <li>Attendance: 88%</li>
            </ul>

          </div>

          <div className="info-box">

            <h3>Career Goal</h3>

            <p>
              To become a skilled Full Stack Developer and AI Engineer
              capable of creating innovative software solutions.
            </p>

          </div>

        </div>
      )}

      {/* Skills Section */}
      {activeSection === "skills" && (
        <div className="card">

          <h2>Technical Skills</h2>

          <div className="skill-section">

            <h3>Frontend Development</h3>

            <div className="skill-list">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript ES6</span>
              <span>React JS</span>
              <span>Bootstrap</span>
            </div>

          </div>

          <div className="skill-section">

            <h3>Programming Languages</h3>

            <div className="skill-list">
              <span>Java</span>
              <span>Python</span>
              <span>C Programming</span>
            </div>

          </div>

          <div className="skill-section">

            <h3>Database Skills</h3>

            <div className="skill-list">
              <span>MySQL</span>
              <span>SQL Queries</span>
              <span>DBMS Concepts</span>
            </div>

          </div>

          <div className="skill-section">

            <h3>Tools & Platforms</h3>

            <div className="skill-list">
              <span>VS Code</span>
              <span>Git & GitHub</span>
              <span>Jupyter Notebook</span>
              <span>MySQL Workbench</span>
            </div>

          </div>

        </div>
      )}

      {/* Projects Section */}
      {activeSection === "projects" && (
        <div className="card">

          <h2>My Projects</h2>

          <div className="project-grid">

            <div className="project">

              <div className="project-number">01</div>

              <h3>Student Dashboard</h3>

              <p>
                Developed a React application to display student
                information, attendance, subjects, and academic
                performance.
              </p>

              <span className="technology">
                React JS
              </span>

            </div>

            <div className="project">

              <div className="project-number">02</div>

              <h3>Attendance Tracker</h3>

              <p>
                Created a React-based attendance management system
                with Present and Absent status tracking.
              </p>

              <span className="technology">
                React JS
              </span>

            </div>

            <div className="project">

              <div className="project-number">03</div>

              <h3>Food Ordering Application</h3>

              <p>
                Designed a food ordering interface with menu
                selection, pricing, and order summary features.
              </p>

              <span className="technology">
                React / CSS
              </span>

            </div>

            <div className="project">

              <div className="project-number">04</div>

              <h3>Titanic EDA Analysis</h3>

              <p>
                Performed Exploratory Data Analysis on the Titanic
                dataset using Python, Pandas, Matplotlib, and Seaborn.
              </p>

              <span className="technology">
                Python / Pandas
              </span>

            </div>

            <div className="project">

              <div className="project-number">05</div>

              <h3>Md Athif Communication Website</h3>

              <p>
                Built a responsive website showcasing CCTV cameras,
                biometric systems, face recognition solutions, and
                communication devices.
              </p>

              <span className="technology">
                HTML / CSS / JavaScript
              </span>

            </div>

          </div>

        </div>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <div className="card">

          <h2>Contact Information</h2>

          <div className="contact-list">

            <div className="contact-item">
              <strong>Name</strong>
              <p>Mohamed Athif</p>
            </div>

            <div className="contact-item">
              <strong>Department</strong>
              <p>AI & DS</p>
            </div>

            <div className="contact-item">
              <strong>College</strong>
              <p>Prince College of Engineering</p>
            </div>

            <div className="contact-item">
              <strong>Email</strong>
              <p>athif@example.com</p>
            </div>

            <div className="contact-item">
              <strong>Phone</strong>
              <p>+91 9876543210</p>
            </div>

            <div className="contact-item">
              <strong>Location</strong>
              <p>Chennai, Tamil Nadu, India</p>
            </div>

            <div className="contact-item">
              <strong>LinkedIn</strong>
              <p>linkedin.com/in/mohamedathif</p>
            </div>

            <div className="contact-item">
              <strong>GitHub</strong>
              <p>github.com/mohamedathif</p>
            </div>

          </div>

          <div className="contact-message">

            <p>
              Feel free to contact me for project collaborations,
              internships, and learning opportunities.
            </p>

          </div>

        </div>
      )}

      {/* Footer */}
      <footer>
        <p>
          © 2026 Mohamed Athif | AI & DS Student
        </p>
      </footer>

    </div>
  );
}

export default App;