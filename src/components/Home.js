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
        console.warn(resultat)
        setInfo(resultat)
        localStorage.setItem('home', JSON.stringify(resultat))
      })
    }).catch(err => {
      setMode('offline')
      let collection = localStorage.getItem('home');
      setInfo(JSON.parse(collection))
    })
  }, [])

  const { id, public_repos, public_gists, html_url, login, created_at, updated_at, followers, received_events_url, starred_url } = info
  return (
    <div className="linear-gradient">
      {/* <img className="back-img" src={require('../assets/images/good-weather.jpg')} alt="background" />*/}
      {
        mode === 'offline' ? <div className=" alert alert-danger" role="alert">You are in Offline mode or some issue with connection</div> : null
      }
      <h1>My Github Account</h1>
      <img className="rounded-img" src="https://avatars3.githubusercontent.com/u/50537655?s=400&u=4901bca59dce00305a18adf5a39201bdc75a7686&v=4" alt="avatar" />
      <h2><a href={html_url} target="new">{login}</a></h2>
      <hr />
      <div key={id}>
        <span>Number of public Repos : {public_repos}</span><br />
        <span>Number of public Gists : {public_gists}</span><br />
        <hr />
        <sup>Created at : <Moment style={{ color: 'blue' }} locale="fr">{created_at}</Moment></sup>
        <br />
      </div>
      <br />
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
