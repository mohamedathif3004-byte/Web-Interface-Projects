import React, { createContext } from "react";
import "./App.css";
import ReportCard from "./ReportCard";

export const StudentContext = createContext();

function App() {
  const studentData = {
    name: "Mohamed Athif",
    department: "AI & DS",
    year: "II Year",
    grade: "A",
    subjects: [
      { subject: "React", marks: 95 },
      { subject: "Java", marks: 88 },
      { subject: "Python", marks: 92 },
      { subject: "DBMS", marks: 85 },
      { subject: "SQL", marks: 90 },
    ],
  };

  return (
    <StudentContext.Provider value={studentData}>
      <div className="app">
        <header className="header">
          <h1>🎓 Student Report Card</h1>
          <p>Academic Performance Report</p>
        </header>

        <ReportCard />

        <footer className="footer">
          <h3>Prince College of Engineering</h3>
          <p>AI & DS Department</p>
        </footer>
      </div>
    </StudentContext.Provider>
  );
}

export default App;