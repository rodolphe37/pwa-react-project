import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const About = (props) => {
  const [about, setAbout] = useState([])
  const [mode, setMode] = useState('online')

  const { REACT_APP_USERNAME } = process.env

  const { t } = useTranslation();

  useEffect(() => {
    const url = `https://api.github.com/users/${REACT_APP_USERNAME}`
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

  const { id, location, blog, followers } = about
  return (
    <div className="linear-gradient">
      {
        mode === 'offline' ? <div className=" alert alert-danger" role="alert">{t('alert')}</div> : null
      }
      <br />
      <h1 style={{ fontSize: "30px" }}>{t('aboutMe')}</h1>
      <img className="rounded-img" src={require('../assets/images/perso-5b.png')} alt="avatar" />
      <div key={id}>
        <span>{t('organization')} : <a href="https://github.com/WildCodeSchool" target="new"><img className="school-img" src={`https://avatars2.githubusercontent.com/u/8874047?s=60&v=4`} alt="school organization" /></a> </span><br />
        <span>{t('location')} : <b>{location}</b></span><br />
        <div>
          <p>Followers : {followers}</p>
        </div>
        <br />
        <span>{t('linkPortfolio')} : <a href={blog} target="new">rodolphe-augusto.fr</a></span>
        <br />
        <div>
          <br />
          <div>
            <span className="title-tools">{t('tools')}:</span>
          </div>
          <br />
          <div className="tools">
            <img align="center" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />&ensp;
            <img align="center" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />&ensp;
            <img align="center" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />&ensp;
            <img align="center" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />&ensp;
            <img align="center" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />&ensp;
            <img align="center" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />&ensp;
            <img align="center" alt="Gatsby" width="26px" src="https://raw.githubusercontent.com/github/explore/e94815998e4e0713912fed477a1f346ec04c3da2/topics/gatsby/gatsby.png" />&ensp;
            <img align="center" alt="GraphQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/graphql/graphql.png" />&ensp;
          </div>
          <div className="tools">
            <img align="center" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />&ensp;
          <img align="center" alt="Deno" width="26px" src="https://raw.githubusercontent.com/github/explore/361e2821e2dea67711cde99c9c40ed357061cf27/topics/deno/deno.png" />&ensp;
          <img align="center" alt="SQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" />&ensp;
          <img align="center" alt="MySQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" />&ensp;
          <img align="center" alt="MongoDB" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />&ensp;
          <img align="center" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />&ensp;
          <img align="center" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />&ensp;
          <img align="center" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />
          </div>
          <div style={{ textAlign: 'center', padding: '25px' }}>
            <p className="bio">{t('bio')} : <br />{t('bioContent')}</p></div>
        </div>
        <hr />
      </div>
      <div>
        <Footer />
        <div style={{ marginTop: '10px' }}>
          <small className="d-block mb-3 link-footer brand-footer">Copyright &copy; Rodolphe Augusto 2020</small>
        </div>
      </div>
      <br />
      <div className="padding-bottom-phone">
        <br />
        <br />
      </div>
    </div>
  )
}

export default About
