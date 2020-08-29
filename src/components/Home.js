import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import Footer from './Footer';

const Home = (props) => {
  const [info, setInfo] = useState([])
  const [mode, setMode] = useState('online')

  useEffect(() => {
    const url2 = "https://api.github.com/users/rodolphe37"
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
  }, [])

  const { id, public_repos, public_gists, html_url, name, created_at, login, updated_at } = info
  return (
    <div className="linear-gradient">
      {
        mode === 'offline' ? <div className=" alert alert-danger" role="alert">You are in Offline mode or some issue with connection</div> : null
      }
      <br />
      <h1 style={{ fontSize: "30px" }}>My Github Account</h1>
      <img className="rounded-img" src="https://avatars3.githubusercontent.com/u/50537655?s=400&u=4901bca59dce00305a18adf5a39201bdc75a7686&v=4" alt="avatar" />
      <h2><a href={html_url} target="new">{name}</a></h2>
      <h5>Username : {login}</h5>
      <hr />
      <div key={id}>
        <span>Number of public Repos : <b>{public_repos}</b></span><br />
        <span>Number of public Gists : <b>{public_gists}</b></span>
        <br />
        <br />
        <sup>Account created at : <Moment style={{ color: 'red' }} locale="fr">{created_at}</Moment></sup>
        <br />
        <iframe className="stats" title="stats" frameBorder="false" src="https://github-readme-stats.vercel.app/api?username=rodolphe37&show_icons=true&hide_border=true" />
      </div>
      <br />
      <sup>Last Activity on my repositories :<br /> <Moment style={{ color: 'red' }} locale="fr">{updated_at}</Moment></sup>
      <hr />
      <div className="footer">
        <Footer />
      </div>
      <div style={{ marginTop: '10px' }}>
        <small className="d-block mb-3 link-footer brand-footer">Copyright &copy; Rodolphe Augusto 2020</small>
      </div>
    </div>
  )
}

export default Home
