import React from 'react';
import './App.css';
import UserTable from './tables/UserTable'

function App() {
  return (
    <div className="App">
      <div className="contianer">
        <h1> CRUD App with Hooks </h1>
        <div className="panel">
          <h2>Add User</h2>
        </div>
        <div className="library">
          <h2>View Users</h2>
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default App;
