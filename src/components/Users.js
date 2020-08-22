import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'

const Users = () => {
  const [data, setData] = useState([])
  const [mode, setMode] = useState('online')

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users"
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.warn(result)
        setData(result)
        localStorage.setItem('users', JSON.stringify(result))
      })
    }).catch(err => {
      setMode('offline')
      let collection = localStorage.getItem('users');
      setData(JSON.parse(collection))
    })
  }, [])
  return (
    <div>
      <div>
        {
          mode === 'offline' ? <div className=" alert alert-danger" role="alert">You are in Offline mode or some issue with connection</div> : null
        }
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th className="hidden">Address</th>
            <th className="hidden">Phone</th>
            <th className="hidden">Website</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td className="hidden">{item.address.city}</td>
                <td className="hidden">{item.phone}</td>
                <td className="hidden">{item.website}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Users
