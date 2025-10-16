import React, { useState } from 'react';
import './App.css';

const students = [
  { id: 1, name: "Bhuvanesh" },
  { id: 2, name: "Praveen" },
  { id: 3, name: "Jaya Sai" },
  { id: 4, name: "Satish" },
  { id: 5, name: "Ravi" }
];

function App() {
  const [attendance, setAttendance] = useState({});

  const handleCheckboxChange = (studentId) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: !prev[studentId]
    }));
  };

  const totalPresent = Object.values(attendance).filter(Boolean).length;

  return (
    <div className="app">
      <div className="container">
        <h1>📚 Student Attendance Tracker</h1>
        
        <div className="stats">
          <div className="stat-card">
            <h3>Total Students</h3>
            <span className="number">{students.length}</span>
          </div>
          <div className="stat-card present">
            <h3>Present</h3>
            <span className="number">{totalPresent}</span>
          </div>
          <div className="stat-card absent">
            <h3>Absent</h3>
            <span className="number">{students.length - totalPresent}</span>
          </div>
        </div>

        <div className="student-list">
          <h2>Mark Attendance</h2>
          {students.map(student => (
            <div key={student.id} className="student-item">
              <label className="student-label">
                <input
                  type="checkbox"
                  checked={attendance[student.id] || false}
                  onChange={() => handleCheckboxChange(student.id)}
                  className="checkbox"
                />
                <span className="student-name">{student.name}</span>
                <span className={`status ${attendance[student.id] ? 'present' : 'absent'}`}>
                  {attendance[student.id] ? '✅ Present' : '❌ Absent'}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
