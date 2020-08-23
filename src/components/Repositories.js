import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment/locale/fr';

const Users = () => {
  const [data, setData] = useState([])
  const [mode, setMode] = useState('online')
  let idplus = []

  useEffect(() => {
    const url = "https://api.github.com/users/rodolphe37/repos"
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

  return (
    <div>
      <div>
        {
          mode === 'offline' ? <div className=" alert alert-danger" role="alert">You are in Offline mode or some issue with connection</div> : null
        }
      </div>
      <div>My 30 Last Repo Github</div>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th className="hidden">Id</th>
            <th>Name</th>
            <th>Link</th>
            <th className="hidden">Created</th>
            <th className="hidden">Languages</th>
            <th className="hidden">Forked</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr key={item.id}>
                <td className="hidden">{idplus++}</td>
                <td>{item.name}</td>
                <td><a href={`${item.html_url}`} target="new">{item.full_name}</a></td>
                <td className="hidden"><Moment locale="fr">{item.created_at}</Moment></td>
                <td className="hidden">{item.language}</td>
                <td className="hidden">{item.fork === true ? 'Yes' : 'No'}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Users
