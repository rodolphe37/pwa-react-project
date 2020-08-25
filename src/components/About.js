import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';

const About = (props) => {
  const [about, setAbout] = useState([])
  const [mode, setMode] = useState('online')

  useEffect(() => {
    const url = "https://api.github.com/users/rodolphe37"
    fetch(url).then((res) => {
      res.json().then((resultat) => {
        setAbout(resultat)
        localStorage.setItem('about', JSON.stringify(resultat))
      })
    }).catch(err => {
      setMode('offline')
      let collection = localStorage.getItem('about');
      setAbout(JSON.parse(collection))
    })
  }, [])

  const { id, location, blog, bio, updated_at, followers } = about
  return (
    <div className="linear-gradient">
      {
        mode === 'offline' ? <div className=" alert alert-danger" role="alert">You are in Offline mode or some issue with connection</div> : null
      }
      <br />
      <h1 style={{ fontSize: "30px" }}>About me</h1>
      <img className="rounded-img" src="https://www.rodolphe-augusto.fr/static/media/perso-5b.9e8d203d.png" alt="avatar" />
      <div key={id}>
        <span>School where I went : <a href="https://github.com/WildCodeSchool" target="new"><img className="school-img" src={`https://avatars2.githubusercontent.com/u/8874047?s=60&v=4`} alt="school organization" /></a> </span><br />
        <span>My Location : <b>{location}</b></span><br />
        <div>
          <p>Followers : {followers}</p>
        </div>
        <span>My Portfolio link : <a href={blog} target="new">rodolphe-augusto.fr</a></span>
        <br />
        <br />
        <p className="bio">My Bio : <br />{bio}</p>
        <sup>Last Activity on my repositories :<br /> <Moment style={{ color: 'red' }} locale="fr">{updated_at}</Moment></sup>
        <br />
      </div>
    </div>
  )
}

export default About
