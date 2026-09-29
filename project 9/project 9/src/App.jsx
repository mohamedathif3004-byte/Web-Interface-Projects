import React, { useState } from "react";
import "./App.css";

function App() {
  const [showSubjects, setShowSubjects] = useState(false);

  const student = {
    name: "Mohamed Athif",
    grade: "A",
    subjects: [
      { name: "React", marks: 95 },
      { name: "Java", marks: 90 },
      { name: "Python", marks: 85 },
      { name: "DBMS", marks: 88 },
      { name: "SQL", marks: 25 }
    ]
  };

  return (
    <div className="container">
      <div className="card">

        <div className="header">
          <h1>Student Report Card</h1>
          <p>Academic Performance Details</p>
        </div>

        <div className="student-info">
          <p>
            <b>Name:</b> {student.name}
          </p>

          <p>
            <b>Overall Grade:</b>
            <span className="grade">{student.grade}</span>
          </p>
        </div>

        <button
          className="btn"
          onClick={() => setShowSubjects(!showSubjects)}
        >
          {showSubjects ? "Hide Subjects" : "Show Subjects"}
        </button>

        {showSubjects && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {student.subjects.map((subject, index) => (
                  <tr key={index}>
                    <td>{subject.name}</td>
                    <td>{subject.marks}</td>

                    <td>
                      {subject.marks >= 40 ? (
                        <span className="pass">PASS</span>
                      ) : (
                        <span className="fail">FAIL</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="footer">
          <p>© 2026 Student Academic Report</p>
        </div>

      </div>
    </div>
  );
}

export default App;