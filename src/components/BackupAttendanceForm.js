import React, { useState } from 'react';
import './BackupAttendanceForm.css';

const BackupAttendanceForm = () => {
  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [competitionName, setCompetitionName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { teamName, leaderName, competitionName });
  };

  return (
    <div className="attendance-container">
      <div className="form-section">
        <img src="/procom25logo.png" alt="Procom 25" className="logo" />
        <h1>MARK ATTENDANCE</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter team name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter leader name"
            value={leaderName}
            onChange={(e) => setLeaderName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter competition name"
            value={competitionName}
            onChange={(e) => setCompetitionName(e.target.value)}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>

      <div className="help-button">
        <button className="help-icon">?</button>
      </div>
    </div>
  );
};

export default BackupAttendanceForm; 