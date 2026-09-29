import React from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1>Prince College of Engineering</h1>
      <h2>Student Profile Dashboard</h2>
    </header>
  );
}

function StudentCard() {
  const student = {
    name: "Mohamed Athif",
    regNo: "411625243029",
    department: "AI & DS",
    year: "II Year",
    cgpa: 8.7,
    attendance: 88,
  };

  return (
    <div className="card">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Student"
      />

      <h2>{student.name}</h2>

      <p><b>Register No:</b> {student.regNo}</p>
      <p><b>Department:</b> {student.department}</p>
      <p><b>Year:</b> {student.year}</p>
      <p><b>CGPA:</b> {student.cgpa}</p>
      <p><b>Attendance:</b> {student.attendance}%</p>

      {student.attendance >= 75 ? (
        <p className="eligible">Eligible for Semester Exam</p>
      ) : (
        <p className="notEligible">Not Eligible for Semester Exam</p>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Prince College of Engineering</p>
      <p>Developed using React JS</p>
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <StudentCard />
      <Footer />
    </div>
  );
}

export default App;