import React from "react";

export default function StudentCard({ student }) {
  return (
    <div className="student-card">
      <div className="center">
        <img src={student.pic} alt={student.name} />
        <h3>{student.name}</h3>
      </div>
      <hr />
      <div>
        <p>
          <strong>Student ID: </strong>
          {student.id}
        </p>
        <p>
          <strong>Class : </strong>T2404E
        </p>
      </div>
    </div>
  );
}
