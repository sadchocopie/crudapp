import React from 'react'

function UserTable() {
  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name data</td>
          <td>Username data</td>
          <td>
            <button className="button">Edit</button>
            <button className="button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );

}

export default UserTable;
