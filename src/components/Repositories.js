import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment/locale/fr';

const Users = () => {
  const [data, setData] = useState([])
  const [mode, setMode] = useState('online')
  let idplus = []

  useEffect(() => {
    const url = "https://api.github.com/users/rodolphe37/repos?per_page=100"
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.log(result)
        setData(result)
        localStorage.setItem('repository', JSON.stringify(result))
      })
    }).catch(err => {
      setMode('offline')
      let collection2 = localStorage.getItem('repository');
      setData(JSON.parse(collection2))
    })
  }, [])

  const sortedActivities = data.slice().sort((a, b) => b.updated_at - a.updated_at)
  console.log('data list :', data)
  console.log('Sorted list :', sortedActivities)
  return (
    <div>
      <div>
        {
          mode === 'offline' ? <div className=" alert alert-danger" role="alert">You are in Offline mode or some issue with connection</div> : null
        }
      </div>
      <br />
      <div><b>My Repos Github list</b></div>
      <br />
      <Table striped bordered hover >
        <thead>
          <tr>
            <th className="hidden">Id</th>
            <th>Name</th>
            <th>Link</th>
            <th className="hidden">Created at</th>
            <th className="hidden">Updated at</th>
            <th className="hidden">Languages</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              item.fork === false ? <tr key={item.id}>
                <td className="hidden">{idplus++}</td>
                <td>{item.name}</td>
                <td><a href={`${item.html_url}`} target="new">Click to Open</a></td>
                <td className="hidden"><Moment locale="fr">{item.created_at}</Moment></td>
                <td className="hidden"><Moment locale="fr">{item.updated_at}</Moment></td>
                <td className="hidden">{item.language}</td>
              </tr>
                : null
            ))
          }
        </tbody>
      </Table>
      <br />
      <div><b>Forked Repos Github list</b></div>
      <br />
      <Table striped bordered hover >
        <thead>
          <tr>
            <th className="hidden">Id</th>
            <th>Name</th>
            <th>Link</th>
            <th className="hidden">Created</th>
            <th className="hidden">Forked</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            item.fork === true ? <tr key={item.id}>
              <td className="hidden">{idplus++}</td>
              <td>{item.name}</td>
              <td><a href={`${item.html_url}`} target="new">Click to Open</a></td>
              <td className="hidden"><Moment locale="fr">{item.created_at}</Moment></td>
              <td className="hidden">{item.fork === true ? 'Yes' : ''}</td>

            </tr>
              : null
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Users
