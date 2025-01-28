import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AttendanceForm from './components/AttendanceForm';
import BackupAttendanceForm from './components/BackupAttendanceForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-links">
          <Link to="/">Attendance</Link>
          <Link to="/backup">Backup Attendance</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<AttendanceForm />} />
          <Route path="/backup" element={<BackupAttendanceForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
