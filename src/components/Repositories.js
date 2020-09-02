import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment/locale/fr';
import { useTranslation } from 'react-i18next';
import InfiniteLoopLoader from './infiniteLoopLoader/InfiniteLoopLoader';

const { REACT_APP_USERNAME } = process.env

const Users = () => {
  const [data, setData] = useState([])
  const [mode, setMode] = useState('online')
  const [loading, setLoading] = useState(true)
  let idplus = [1]
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  useEffect(() => {
    const url = `https://api.github.com/users/${REACT_APP_USERNAME}/repos?per_page=100`
    fetch(url).then((response) => {
      response.json().then((result) => {
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
      {loading === false
        ? (
          <React.Fragment>
            <div>
              {
                mode === 'offline' ? <div className=" alert alert-danger" role="alert">{t('alert')}</div> : null
              }
            </div>
            <br />
            <div><b>{t('reposList')}</b></div>
            <br />
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th className="hidden">Id</th>
                  <th>{t('nameRepo')}</th>
                  <th>{t('linkRepo')}</th>
                  <th className="hidden">{t('createdrepos')}</th>
                  <th className="hidden">{t('updatedRops')}</th>
                  <th className="hidden">{t('languagesRepo')}</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item) => (
                    item.fork === false
                      ?
                      <tr key={item.id}>
                        <td className="hidden">{idplus++}</td>
                        <td>{item.name}</td>
                        <td><a href={`${item.html_url}`} target="new">{t('clickOpen')}</a></td>
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
            <div><b>{t('forkedRepos')}</b></div>
            <br />
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th className="hidden">Id</th>
                  <th>{t('nameRepo')}</th>
                  <th>{t('linkRepo')}</th>
                  <th className="hidden">{t('createdrepos')}</th>
                  <th className="hidden">{t('boolForked')}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  item.fork === true
                    ?
                    <tr key={item.id}>
                      <td className="hidden">{idplus++}</td>
                      <td>{item.name}</td>
                      <td><a href={`${item.html_url}`} target="new">{t('clickOpen')}</a></td>
                      <td className="hidden"><Moment locale="fr">{item.created_at}</Moment></td>
                      <td className="hidden">{item.fork === true ? `${t('yesForked')}` : ''}</td>

                    </tr>
                    : null
                ))}
              </tbody>
            </Table>
            <div className="padding-bottom-phone">
              <br />
              <br />
              <br />
              <br />
            </div>
          </React.Fragment>
        ) : (
          <InfiniteLoopLoader />
        )}
    </div>
  )
}

export default Users
