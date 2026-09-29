import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Athif", status: "Present" },
    { id: 2, name: "Bevin", status: "Present" },
    { id: 3, name: "Dhivesh", status: "Present" },
    { id: 4, name: "Bharath", status: "Absent" },
    { id: 5, name: "Tamil", status: "Present" },
    { id: 6, name: "David", status: "Present" },
    { id: 7, name: "Eshan", status: "Absent" },
    { id: 8, name: "Farhan", status: "Present" },
    { id: 9, name: "Gokul", status: "Absent" },
    { id: 10, name: "Hari", status: "Present" },
    { id: 11, name: "Irfan", status: "Present" },
    { id: 12, name: "Jeeva", status: "Absent" },
    { id: 13, name: "Karthik", status: "Present" },
    { id: 14, name: "Lokesh", status: "Absent" },
    { id: 15, name: "Manoj", status: "Absent" },
    { id: 16, name: "Naveen", status: "Present" },
    { id: 17, name: "Praveen", status: "Absent" },
    { id: 18, name: "Rahul", status: "Present" },
    { id: 19, name: "Sanjay", status: "Present" },
    { id: 20, name: "Vignesh", status: "Present" },
  ]);

  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Present"
                  ? "Absent"
                  : "Present",
            }
          : student
      )
    );
  };

  return (
    <div className="container">
      <h1>Student Attendance Tracker</h1>

      <div className="summary">
        <div className="card">
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>

        <div className="card">
          <h3>Present</h3>
          <p>{presentCount}</p>
        </div>

        <div className="card">
          <h3>Absent</h3>
          <p>{absentCount}</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Status</th>
            <th>Attendance</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>

              <td
                className={
                  student.status === "Present"
                    ? "present"
                    : "absent"
                }
              >
                {student.status}
              </td>

              <td>
                <button
                  onClick={() =>
                    toggleAttendance(student.id)
                  }
                >
                  {student.status === "Present"
                    ? "Mark Absent"
                    : "Mark Present"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="report">
        <h2>Attendance Report</h2>

        <div className="lists">
          <div>
            <h3>Present Students</h3>
            <ul>
              {students
                .filter((s) => s.status === "Present")
                .map((s) => (
                  <li key={s.id}>{s.name}</li>
                ))}
            </ul>
          </div>

          <div>
            <h3>Absent Students</h3>
            <ul>
              {students
                .filter((s) => s.status === "Absent")
                .map((s) => (
                  <li key={s.id}>{s.name}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;