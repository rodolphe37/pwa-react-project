import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import Footer from './shared/Footer';
import { useTranslation } from 'react-i18next';

const Home = (props) => {
  const [info, setInfo] = useState([])
  const [mode, setMode] = useState('online')

  const { REACT_APP_USERNAME, REACT_APP_PICTURE_USER, REACT_APP_NAME_COPYRIGHT, REACT_APP_YEAR_COPYRIGHT } = process.env

  const { t } = useTranslation();

  useEffect(() => {
    const url2 = `https://api.github.com/users/${REACT_APP_USERNAME}`
    fetch(url2).then((res) => {
      res.json().then((resultat) => {
        setInfo(resultat)
        localStorage.setItem('home', JSON.stringify(resultat))
      })
    }).catch(err => {
      setMode('offline')
      let collection = localStorage.getItem('home');
      setInfo(JSON.parse(collection))
    })
  }, [REACT_APP_USERNAME])

  const { id, public_repos, public_gists, html_url, name, created_at, login, updated_at } = info
  return (
    <div className="linear-gradient">
      {
        mode === 'offline' ? <div className=" alert alert-danger" role="alert">{t('alert')}</div> : null
      }
      <h1 style={{ fontSize: "30px" }}>{t('title')}</h1>
      <img className="rounded-img" src={`https://${REACT_APP_PICTURE_USER}`} alt="avatar" />
      <h2><a href={html_url} target="new">{name}</a></h2>
      <h5>{t('username')} : {login}</h5>
      <br />
      <img className="perso-stats2" align="right" width="300px" alt="My Github Languages most used" src={`https://komarev.com/ghpvc/?username=${REACT_APP_USERNAME}&label=PROFILE+VIEWS`} />
      <hr />
      <div key={id}>
        <span>{t('publicRepos')} : <b>{public_repos}</b></span><br />
        <span>{t('publicGists')} : <b>{public_gists}</b></span>
        <br />
        <br />
        <sup>{t('created')} : <br className="appear" /> <Moment style={{ color: 'red' }} locale=" fr">{created_at}</Moment></sup>
        <br />
        <div>
          <img className="stats hidden-frame" title="stats" src={`https://github-readme-stats.rodolphe37.vercel.app/api?username=${REACT_APP_USERNAME}&show_icons=true&hide_border=true&hide=stars,issues,contribs`} alt="most languages used" />
        </div>
      </div>
      <br />
      <sup>{t('activity')} :<br className="appear" /> <Moment style={{ color: 'red' }} locale="fr">{updated_at}</Moment></sup>
      <hr />
      <div className="footer">
        <Footer />
      </div>
      <div style={{ marginTop: '10px' }}>
        <small className="d-block mb-3 link-footer brand-footer">Copyright &copy; {`${REACT_APP_NAME_COPYRIGHT}`} {`${REACT_APP_YEAR_COPYRIGHT}`}</small>
      </div>
    </div>
  )
}

export default Home
