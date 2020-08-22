import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'

const Users = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users"
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.warn(result)
        setData(result)
      })
    })
  }, [])
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Users
