import React, { useContext } from "react";
import { StudentContext } from "./App";

function ReportCard() {
  const student = useContext(StudentContext);

  const totalMarks = student.subjects.reduce(
    (sum, item) => sum + item.marks,
    0
  );

  const average = (totalMarks / student.subjects.length).toFixed(2);

  return (
    <div className="card">

      <div className="student-header">
        <div className="profile-icon">👨‍🎓</div>

        <div>
          <h2>{student.name}</h2>
          <p>Student Academic Report</p>
        </div>
      </div>

      <div className="student-info">
        <div className="info-box">
          <span>Department</span>
          <strong>{student.department}</strong>
        </div>

        <div className="info-box">
          <span>Year</span>
          <strong>{student.year}</strong>
        </div>

        <div className="info-box">
          <span>Overall Grade</span>
          <strong className="grade">{student.grade}</strong>
        </div>
      </div>

      <h3 className="section-title">Subject Performance</h3>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody>
          {student.subjects.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.subject}</td>
              <td>{item.marks}</td>
              <td>
                <span
                  className={
                    item.marks >= 50 ? "pass" : "fail"
                  }
                >
                  {item.marks >= 50 ? "Pass" : "Fail"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="result-section">
        <div className="result-box">
          <span>Total Marks</span>
          <strong>{totalMarks} / 500</strong>
        </div>

        <div className="result-box">
          <span>Average</span>
          <strong>{average}%</strong>
        </div>

        <div className="result-box">
          <span>Grade</span>
          <strong className="grade">{student.grade}</strong>
        </div>
      </div>

      <div className="status">
        🎉 Congratulations! You have successfully passed all subjects.
      </div>
    </div>
  );
}

export default ReportCard;