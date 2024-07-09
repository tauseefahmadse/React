// rafce
import React from "react";
import Table from "react-bootstrap/Table";
import userRecords from "../data/Users";

const Test = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {/* {userRecords.map((user) => (
              <tr>
              <td>{user.id}</td>
            </tr>
              ))}
         */}
          {userRecords.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isActive?"Active":"Blocked"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Test;
